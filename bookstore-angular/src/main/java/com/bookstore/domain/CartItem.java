package com.bookstore.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;

@Entity
public class CartItem implements Serializable {
    private static final long serialVersionUID = 1287954253182929682L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private int qty;
    private BigDecimal subtotal;

    @ManyToOne
    @JoinColumn(name = "book_id")
    private Book book;

    @ManyToOne
    @JoinColumn(name = "shopping_cart_id")
    @JsonIgnore
    private ShoppingCart shoppingCart;

    @ManyToOne
    @JoinColumn(name = "order_id")
    @JsonIgnore
    private Order order;

    public CartItem() {
    }

    public CartItem(int qty, Book book, ShoppingCart shoppingCart) {
        this.qty = qty;
        this.book = book;
        this.shoppingCart = shoppingCart;
        this.subtotal = new BigDecimal(book.getOurPrice()).multiply(new BigDecimal(qty));
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getQty() {
        return qty;
    }

    public void setQty(int qty) {
        this.qty = qty;
        this.subtotal = new BigDecimal(this.book.getOurPrice()).multiply(new BigDecimal(qty));
    }

    public BigDecimal getSubtotal() {
        return subtotal;
    }

    public void setSubtotal(BigDecimal subtotal) {
        this.subtotal = subtotal;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
        this.subtotal = new BigDecimal(book.getOurPrice()).multiply(new BigDecimal(this.qty));
    }

    public ShoppingCart getShoppingCart() {
        return shoppingCart;
    }

    public void setShoppingCart(ShoppingCart shoppingCart) {
        this.shoppingCart = shoppingCart;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }
}
