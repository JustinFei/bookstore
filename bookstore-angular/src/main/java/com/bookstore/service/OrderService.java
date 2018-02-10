package com.bookstore.service;

import com.bookstore.domain.*;
import com.bookstore.domain.security.User;

import java.util.List;

public interface OrderService {
    Order createOrder(ShoppingCart shoppingCart, UserShipping userShipping, UserBilling userBilling, UserPayment userPayment, String shippingMethod, User user);
    Order findOne(Long id);
    List<Order> getOrderList(User user);
}
