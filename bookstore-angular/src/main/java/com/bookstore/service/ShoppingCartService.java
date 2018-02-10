package com.bookstore.service;

import com.bookstore.domain.Book;
import com.bookstore.domain.ShoppingCart;
import com.bookstore.domain.security.User;

public interface ShoppingCartService {
    ShoppingCart updateShoppingCart(ShoppingCart shoppingCart);
    void clearShoppingCart(ShoppingCart shoppingCart);
}
