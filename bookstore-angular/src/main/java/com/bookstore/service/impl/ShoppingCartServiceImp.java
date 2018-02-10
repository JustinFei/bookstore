package com.bookstore.service.impl;

import com.bookstore.domain.CartItem;
import com.bookstore.domain.ShoppingCart;
import com.bookstore.repository.ShoppingCartRepository;
import com.bookstore.service.CartItemService;
import com.bookstore.service.ShoppingCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class ShoppingCartServiceImp implements ShoppingCartService {

    @Autowired
    private CartItemService cartItemService;

    @Autowired
    private ShoppingCartRepository shoppingCartRepository;


    @Override
    public ShoppingCart updateShoppingCart(ShoppingCart shoppingCart) {
        BigDecimal cartTotal = new BigDecimal(0);
        List<CartItem> cartItemList = cartItemService.findByShoppingCart(shoppingCart);

        for(CartItem cartItem : cartItemList){
            if(cartItem.getBook().getInStockNumber() > 0){
                cartItemService.updateCartItem(cartItem);
                cartTotal = cartTotal.add(cartItem.getSubtotal());
            }
        }
        shoppingCart.setGrandTotal(cartTotal);
        return shoppingCartRepository.save(shoppingCart);
    }

    @Override
    public void clearShoppingCart(ShoppingCart shoppingCart) {
        List<CartItem> cartItemList = cartItemService.findByShoppingCart(shoppingCart);
        for(CartItem cartItem : cartItemList){
            cartItem.setShoppingCart(null);
        }
        cartItemList.clear();
        shoppingCart.setCartItemList(cartItemList);
        shoppingCartRepository.save(shoppingCart);
    }
}
