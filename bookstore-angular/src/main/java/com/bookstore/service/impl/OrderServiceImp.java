package com.bookstore.service.impl;

import com.bookstore.domain.*;
import com.bookstore.domain.security.User;
import com.bookstore.repository.OrderRepository;
import com.bookstore.repository.UserBillingRepository;
import com.bookstore.repository.UserPaymentRepository;
import com.bookstore.repository.UserShippingRepository;
import com.bookstore.service.BookService;
import com.bookstore.service.CartItemService;
import com.bookstore.service.OrderService;
import com.bookstore.utility.MailConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service
public class OrderServiceImp implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserBillingRepository userBillingRepository;

    @Autowired
    private UserShippingRepository userShippingRepository;

    @Autowired
    private UserPaymentRepository userPaymentRepository;

    @Autowired
    private CartItemService cartItemService;

    @Autowired
    private BookService bookService;

    @Autowired
    private MailConstructor mailConstructor;

    @Override
    public synchronized Order createOrder(ShoppingCart shoppingCart, UserShipping userShipping, UserBilling userBilling, UserPayment userPayment, String shippingMethod, User user) {
        Order order = new Order();
        userBilling.setUserPayment(userPayment);
//        userBillingRepository.save(userBilling);

        order.setBillingAddress(userBilling);
        userBilling.getUsedByOrderList().add(order);
        order.setOrderStatus("created");
        userPayment.setUser(user);
        userPaymentRepository.save(userPayment);
        order.setPayment(userPayment);
        userPayment.getUsedByOrderList().add(order);
        userShipping.setUser(user);
        userShippingRepository.save(userShipping);
        order.setShippingAddress(userShipping);

        userShipping.getUsedByOrderList().add(order);
        order.setShippingMethod(shippingMethod);

        List<CartItem> cartItemList = cartItemService.findByShoppingCart(shoppingCart);
        for(CartItem cartItem : cartItemList){
            Book book = cartItem.getBook();
            cartItem.setOrder(order);
            book.setInStockNumber(book.getInStockNumber() - cartItem.getQty());
        }

        order.setCartItemList(cartItemList);
        Date today = Calendar.getInstance().getTime();
        order.setOrderDate(today);
        Date shippingDate;
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(today);
        if(shippingMethod.equals("groudShipping")){
            calendar.add(Calendar.DATE, 5);
            shippingDate = calendar.getTime();
        }else{
            calendar.add(Calendar.DATE, 3);
            shippingDate = calendar.getTime();
        }
        order.setShippingDate(shippingDate);
        order.setOrderTotal(shoppingCart.getGrandTotal().multiply(new BigDecimal(1.07)).setScale(2, BigDecimal.ROUND_HALF_UP));
        order.setUser(user);
        return orderRepository.save(order);
    }

    @Override
    public Order findOne(Long id) {
        return orderRepository.findOne(id);
    }

    @Override
    public List<Order> getOrderList(User user) {
        return orderRepository.findByUser(user);
    }
}
