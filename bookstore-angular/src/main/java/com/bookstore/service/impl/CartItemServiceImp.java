package com.bookstore.service.impl;

import com.bookstore.domain.Book;
import com.bookstore.domain.CartItem;
import com.bookstore.domain.Order;
import com.bookstore.domain.ShoppingCart;
import com.bookstore.domain.security.User;
import com.bookstore.repository.CartItemRepository;
import com.bookstore.service.CartItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class CartItemServiceImp implements CartItemService{

    @Autowired
    private CartItemRepository cartItemRepository;

    @Override
    public CartItem addBookToShoppingCart(Book book, User user, int qty) {
        ShoppingCart shoppingCart = user.getShoppingCart();
        List<CartItem> cartItemList = shoppingCart.getCartItemList();
        for(CartItem cartItem : cartItemList){
            if(book.getBookId().longValue() == cartItem.getBook().getBookId().longValue()){
                cartItem.setQty(cartItem.getQty() + qty);
                return cartItemRepository.save(cartItem);
            }
        }
        CartItem cartItem = new CartItem(qty, book, shoppingCart);
        return cartItemRepository.save(cartItem);
    }

    @Override
    public List<CartItem> findByShoppingCart(ShoppingCart shoppingCart) {
        return cartItemRepository.findByShoppingCart(shoppingCart);
    }

//    @Override
//    public List<CartItem> findByOrder(Order order) {
//        return cartItemRepository.findByOrder(order);
//    }

    @Override
    public CartItem updateCartItem(CartItem cartItem) {
        BigDecimal bookPrice = new BigDecimal(cartItem.getBook().getOurPrice());
        BigDecimal qty = new BigDecimal(cartItem.getQty());
        BigDecimal subtotal = bookPrice.multiply(qty);
        cartItem.setSubtotal(subtotal.setScale(2, BigDecimal.ROUND_HALF_UP));
        return cartItemRepository.save(cartItem);
    }

    @Override
    public void removeCartItem(CartItem cartItem) {
        cartItemRepository.delete(cartItem);
    }

    @Override
    public CartItem findById(Long id) {
        return cartItemRepository.findOne(id);
    }

    @Override
    public CartItem save(CartItem cartItem) {
        return cartItemRepository.save(cartItem);
    }


}
