package com.bookstore.resource;

import com.bookstore.domain.UserBilling;
import com.bookstore.domain.UserPayment;
import com.bookstore.domain.security.User;
import com.bookstore.service.UserPaymentService;
import com.bookstore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/payment")
public class PaymentResource {

    @Autowired
    private UserService userService;

    @Autowired
    private UserPaymentService userPaymentService;

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public ResponseEntity addNewCreditCardPost(@RequestBody UserPayment userPayment, Principal principal){
        User user = userService.findByUsername(principal.getName());
        UserBilling userBilling = userPayment.getUserBilling();
        userService.updateUserBilling(user, userPayment, userBilling);
        return new ResponseEntity("Payment Add(Update) Successfully!", HttpStatus.OK);
    }

    @RequestMapping(value = "/remove", method = RequestMethod.POST)
    public ResponseEntity removePaymentPost(@RequestBody String id){
        userPaymentService.removeById(Long.parseLong(id));
        return new ResponseEntity("Payment removed successfully!", HttpStatus.OK);
    }

    @RequestMapping(value = "/setDefault", method = RequestMethod.POST)
    public ResponseEntity setDefaultPaymentPost(@RequestBody String id, Principal principal){
        User user = userService.findByUsername(principal.getName());
        userService.setUserDefaultPayment(Long.parseLong(id), user);
        return new ResponseEntity("This payment is set as default successfully!", HttpStatus.OK);
    }

    @RequestMapping("/getPaymentList")
    public List<UserPayment> getPaymentListPost(Principal principal){
        User user = userService.findByUsername(principal.getName());
        return user.getUserPaymentList();
    }
}
