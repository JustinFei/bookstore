package com.bookstore.domain;

import com.bookstore.domain.security.User;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "user_order")
public class Order implements Serializable{
    private static final long serialVersionUID = 3069283891185638109L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Date orderDate;
    private Date shippingDate;
    private String shippingMethod;
    private String orderStatus;
    private BigDecimal orderTotal;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<CartItem> cartItemList;

    @ManyToOne
    private UserShipping shippingAddress;

    @ManyToOne
    private UserBilling billingAddress;

    @ManyToOne
    private UserPayment payment;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private User user;

    public Order() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

    public Date getShippingDate() {
        return shippingDate;
    }

    public void setShippingDate(Date shippingDate) {
        this.shippingDate = shippingDate;
    }

    public String getShippingMethod() {
        return shippingMethod;
    }

    public void setShippingMethod(String shippingMethod) {
        this.shippingMethod = shippingMethod;
    }

    public String getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(String orderStatus) {
        this.orderStatus = orderStatus;
    }

    public BigDecimal getOrderTotal() {
        return orderTotal;
    }

    public void setOrderTotal(BigDecimal orderTotal) {
        this.orderTotal = orderTotal;
    }

    public List<CartItem> getCartItemList() {
        return cartItemList;
    }

    public void setCartItemList(List<CartItem> cartItemList) {
        this.cartItemList = cartItemList;
    }

    public UserShipping getShippingAddress() {
        return shippingAddress;
    }

    public void setShippingAddress(UserShipping shippingAddress) {
        this.shippingAddress = shippingAddress;
    }

    public UserBilling getBillingAddress() {
        return billingAddress;
    }

    public void setBillingAddress(UserBilling billingAddress) {
        this.billingAddress = billingAddress;
    }

    public UserPayment getPayment() {
        return payment;
    }

    public void setPayment(UserPayment payment) {
        this.payment = payment;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
