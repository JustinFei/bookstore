package com.bookstore.service;

import com.bookstore.domain.UserBilling;
import com.bookstore.domain.UserPayment;
import com.bookstore.domain.UserShipping;
import com.bookstore.domain.security.User;
import com.bookstore.domain.security.UserRole;

import java.util.Set;

public interface UserService {
    User createUser(User user, Set<UserRole> userRoles);
    User createUser(User user);
    User findByUsername(String username);
    User findByEmail(String email);
    User save(User user);
    User findById(Long id);
    void updateUserPaymentInfo(User user, UserPayment userPayment, UserBilling userBilling);
    void updateUserBilling(User user, UserPayment userPayment, UserBilling userBilling);
    void updateUserShipping(User user, UserShipping userShipping);
    void setUserDefaultPayment(Long id, User user);
    void setUserDefaultShipping(Long userShippingId, User user);
}
