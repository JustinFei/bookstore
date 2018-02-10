package com.bookstore;

import com.bookstore.config.SecurityUtility;
import com.bookstore.domain.CartItem;
import com.bookstore.domain.ShoppingCart;
import com.bookstore.domain.UserPayment;
import com.bookstore.domain.UserShipping;
import com.bookstore.domain.security.Role;
import com.bookstore.domain.security.User;
import com.bookstore.domain.security.UserRole;
import com.bookstore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class BookstoreAngularApplication implements CommandLineRunner {

	@Autowired
	private UserService userService;

	public static void main(String[] args) {
		SpringApplication.run(BookstoreAngularApplication.class, args);
	}

	@Override
	public void run(String... strings) throws Exception {
		User user = new User();
		user.setFirstName("Justin");
		user.setLastName("Fei");
		user.setUsername("j");
		user.setPassword(SecurityUtility.passwordEncoder().encode("p"));
		user.setEmail("justin.y.fei@gmail.com");

		Set<UserRole> userRoles = new HashSet<>();
		Role role1 = new Role();
		role1.setRoleId(1);
		role1.setName("ROLE_USER");
		userRoles.add(new UserRole(user, role1));

		ShoppingCart shoppingCart = new ShoppingCart();
		shoppingCart.setCartItemList(new ArrayList<CartItem>());
		shoppingCart.setUser(user);
		user.setShoppingCart(shoppingCart);
		user.setUserPaymentList(new ArrayList<UserPayment>());
		user.setUserShippingList(new ArrayList<UserShipping>());

		userService.createUser(user, userRoles);

		user = new User();
		userRoles = new HashSet<UserRole>();

		user.setFirstName("Admin");
		user.setLastName("Admin");
		user.setUsername("admin");
		user.setPassword(SecurityUtility.passwordEncoder().encode("admin"));
		user.setEmail("admin@gmail.com");
		role1.setRoleId(0);
		role1.setName("ROLE_ADMIN");
		userRoles.add(new UserRole(user, role1));

		shoppingCart = new ShoppingCart();
		shoppingCart.setCartItemList(new ArrayList<CartItem>());
		shoppingCart.setUser(user);
		user.setShoppingCart(shoppingCart);
		user.setUserPaymentList(new ArrayList<UserPayment>());
		user.setUserShippingList(new ArrayList<UserShipping>());

		userService.createUser(user, userRoles);
	}
}
