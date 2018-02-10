package com.bookstore.resource;

import com.bookstore.domain.*;
import com.bookstore.domain.security.User;
import com.bookstore.service.CartItemService;
import com.bookstore.service.OrderService;
import com.bookstore.service.ShoppingCartService;
import com.bookstore.service.UserService;
import com.bookstore.utility.MailConstructor;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.*;

@RestController
@RequestMapping("/checkout")
public class CheckoutResource {
    private Order order = new Order();

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private UserService userService;

    @Autowired
    private CartItemService cartItemService;

    @Autowired
    private OrderService orderService;

    @Autowired
    private ShoppingCartService shoppingCartService;

    @Autowired
    private MailConstructor mailConstructor;

    @RequestMapping(value = "/checkout", method = RequestMethod.POST)
    public Order checkoutPost(@RequestBody HashMap<String, Object> mapper, Principal principal){
        ObjectMapper om = new ObjectMapper();

        UserShipping userShipping = om.convertValue(mapper.get("userShipping"), UserShipping.class);
        UserBilling userBilling = om.convertValue(mapper.get("userBilling"), UserBilling.class);
        UserPayment userPayment = om.convertValue(mapper.get("userPayment"), UserPayment.class);
        String shippingMethod = (String) mapper.get("shippingMethod");

        User user = userService.findByUsername(principal.getName());
        ShoppingCart shoppingCart = user.getShoppingCart();
        List<CartItem> cartItemList = cartItemService.findByShoppingCart(shoppingCart);

        Order order = orderService.createOrder(shoppingCart, userShipping, userBilling, userPayment, shippingMethod, user);

        shoppingCartService.clearShoppingCart(shoppingCart);
        mailSender.send(mailConstructor.constructOrderConfirmationEmail(user, order, Locale.ENGLISH));


        this.order = order;
        return order;
    }
}
