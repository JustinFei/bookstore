package com.bookstore.resource;

import com.bookstore.domain.Book;
import com.bookstore.domain.CartItem;
import com.bookstore.domain.ShoppingCart;
import com.bookstore.domain.security.User;
import com.bookstore.service.BookService;
import com.bookstore.service.CartItemService;
import com.bookstore.service.ShoppingCartService;
import com.bookstore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/cart")
public class ShoppingCartResource {

    @Autowired
    private UserService userService;

    @Autowired
    private BookService bookService;

    @Autowired
    private CartItemService cartItemService;

    @Autowired
    private ShoppingCartService shoppingCartService;

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public ResponseEntity addItem(@RequestBody HashMap<String, Integer> mapper, Principal principal){
        Long bookId = Long.valueOf(mapper.get("bookId"));
        int qty = mapper.get("qty");

        User user = userService.findByUsername(principal.getName());
        Book book = bookService.findOne(bookId);

        if(qty > book.getInStockNumber()){
            return new ResponseEntity("Not enough stock!", HttpStatus.BAD_REQUEST);
        }

        CartItem cartItem = cartItemService.addBookToShoppingCart(book, user, qty);
        return new ResponseEntity("Book added successfully!", HttpStatus.OK);
    }

    @RequestMapping("/getCartItemList")
    public List<CartItem> getCartItemList(Principal principal){
        User user = userService.findByUsername(principal.getName());
        ShoppingCart shoppingCart = user.getShoppingCart();

        List<CartItem> cartItemList = cartItemService.findByShoppingCart(shoppingCart);

        shoppingCartService.updateShoppingCart(shoppingCart);
        return cartItemList;
    }

    @RequestMapping("/getShoppingCart")
    public ShoppingCart getShoppingCart(Principal principal){
        User user = userService.findByUsername(principal.getName());
        ShoppingCart shoppingCart = user.getShoppingCart();

        shoppingCartService.updateShoppingCart(shoppingCart);

        return shoppingCart;
    }

    @RequestMapping(value = "/removeCartItem", method = RequestMethod.POST)
    public ResponseEntity removeItem(@RequestBody String id){
        cartItemService.removeCartItem(cartItemService.findById(Long.parseLong(id)));
        return new ResponseEntity("Cart Item removed successfully!", HttpStatus.OK);
    }

    @RequestMapping(value = "/updateCartItem", method = RequestMethod.POST)
    public ResponseEntity updateCartItem(@RequestBody HashMap<String, Integer> mapper){
        Long cartItemId = Long.valueOf(mapper.get("cartItemId"));
        int qty = mapper.get("qty");

        CartItem cartItem = cartItemService.findById(cartItemId);
        cartItem.setQty(qty);
        cartItemService.save(cartItem);

        return new ResponseEntity("Cart item updated successfully!", HttpStatus.OK);
    }
}
