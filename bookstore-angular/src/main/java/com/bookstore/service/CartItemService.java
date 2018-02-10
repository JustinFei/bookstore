package com.bookstore.service;

import com.bookstore.domain.Book;
import com.bookstore.domain.CartItem;
import com.bookstore.domain.Order;
import com.bookstore.domain.ShoppingCart;
import com.bookstore.domain.security.User;

import java.util.List;

public interface CartItemService {
    CartItem addBookToShoppingCart(Book book, User user, int qty);
    List<CartItem> findByShoppingCart(ShoppingCart shoppingCart);
//    List<CartItem> findByOrder(Order order);
    CartItem updateCartItem(CartItem cartItem);
    void removeCartItem(CartItem cartItem);
    CartItem findById(Long id);
    CartItem save(CartItem cartItem);
}
