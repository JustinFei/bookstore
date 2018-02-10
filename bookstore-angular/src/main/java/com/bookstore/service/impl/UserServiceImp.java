package com.bookstore.service.impl;

import com.bookstore.domain.*;
import com.bookstore.domain.security.User;
import com.bookstore.domain.security.UserRole;
import com.bookstore.repository.*;
import com.bookstore.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class UserServiceImp implements UserService {
    private static final Logger LOG = LoggerFactory.getLogger(UserServiceImp.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private UserPaymentRepository userPaymentRepository;

    @Autowired
    private UserBillingRepository userBillingRepository;

    @Autowired
    private UserShippingRepository userShippingRepository;

    @Override
    public User createUser(User user, Set<UserRole> userRoles) {
        User localUser = userRepository.findByUsername(user.getUsername());

        if(localUser != null){
            LOG.info("User with username {} already exists. Nothing will be done!", user.getUsername());
        }else{
            for(UserRole ur : userRoles){
                roleRepository.save(ur.getRole());
            }
            user.getUserRoles().addAll(userRoles);

            user.setUserPaymentList(new ArrayList<UserPayment>());

            user.setUserShippingList(new ArrayList<UserShipping>());

            ShoppingCart shoppingCart = new ShoppingCart();
            shoppingCart.setUser(user);
            shoppingCart.setCartItemList(new ArrayList<CartItem>());
            user.setShoppingCart(shoppingCart);

            localUser = userRepository.save(user);

        }
        return localUser;
    }

    @Override
    public User createUser(User user) {
        User localUser = userRepository.findByUsername(user.getUsername());

        if(localUser != null){
            LOG.info("User with username {} already exists. Nothing will be done!", user.getUsername());
        }else{
            localUser = userRepository.save(user);

            user.setUserPaymentList(new ArrayList<UserPayment>());

            user.setUserShippingList(new ArrayList<UserShipping>());

            ShoppingCart shoppingCart = new ShoppingCart();
            shoppingCart.setUser(user);
            shoppingCart.setCartItemList(new ArrayList<CartItem>());
            user.setShoppingCart(shoppingCart);
        }
        return localUser;
    }

    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public User findById(Long id) {
        return userRepository.findOne(id);
    }

    @Override
    public void updateUserPaymentInfo(User user, UserPayment userPayment, UserBilling userBilling) {
        save(user);
        userPaymentRepository.save(userPayment);
        userBillingRepository.save(userBilling);
    }

    @Override
    public void updateUserBilling(User user, UserPayment userPayment, UserBilling userBilling) {
        userPayment.setUser(user);
        userPayment.setUserBilling(userBilling);
        userPayment.setDefaultPayment(true);
        userBilling.setUserPayment(userPayment);
        user.getUserPaymentList().add(userPayment);
        save(user);
    }

    @Override
    public void updateUserShipping(User user, UserShipping userShipping) {
        userShipping.setUser(user);
        userShipping.setDefaultShipping(true);
        user.getUserShippingList().add(userShipping);
        save(user);
    }

    @Override
    public void setUserDefaultPayment(Long userPaymentId, User user) {
        List<UserPayment> userPaymentList = (List<UserPayment>) userPaymentRepository.findAll();
        for(UserPayment userPayment : userPaymentList){
            if(userPayment.getId().equals(userPaymentId)){
                userPayment.setDefaultPayment(true);
                userPaymentRepository.save(userPayment);
            }else {
                userPayment.setDefaultPayment(false);
                userPaymentRepository.save(userPayment);
            }
        }
    }

    @Override
    public void setUserDefaultShipping(Long userShippingId, User user) {
        List<UserShipping> userPaymentList = (List<UserShipping>) userShippingRepository.findAll();
        for(UserShipping userShipping : userPaymentList){
            if(userShipping.getId().equals(userShippingId)){
                userShipping.setDefaultShipping(true);
                userShippingRepository.save(userShipping);
            }else {
                userShipping.setDefaultShipping(false);
                userShippingRepository.save(userShipping);
            }
        }
    }
}
