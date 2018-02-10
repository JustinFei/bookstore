package com.bookstore.resource;

import com.bookstore.domain.UserShipping;
import com.bookstore.domain.security.User;
import com.bookstore.service.UserService;
import com.bookstore.service.UserShippingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/shipping")
public class ShippingResource {

    @Autowired
    private UserService userService;

    @Autowired
    private UserShippingService userShippingService;

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public ResponseEntity addNewUserShippingPost(@RequestBody UserShipping userShipping, Principal principal){
        User user = userService.findByUsername(principal.getName());
        userService.updateUserShipping(user, userShipping);
        return new ResponseEntity("Shipping Added(Updated) Successfully!", HttpStatus.OK);
    }

    @RequestMapping(value = "/remove", method = RequestMethod.POST)
    public ResponseEntity removeShippingPost(@RequestBody String id){
        userShippingService.removeById(Long.parseLong(id));
        return new ResponseEntity("Shipping removed successfully!", HttpStatus.OK);
    }

    @RequestMapping(value = "/setDefault", method = RequestMethod.POST)
    public ResponseEntity setDefaultShippingPost(@RequestBody String id, Principal principal){
        User user = userService.findByUsername(principal.getName());
        userService.setUserDefaultShipping(Long.parseLong(id), user);
        return new ResponseEntity("This shipping is set as default successfully!", HttpStatus.OK);
    }

    @RequestMapping("/getShippingList")
    public List<UserShipping> getShppingListPost(Principal principal){
        User user = userService.findByUsername(principal.getName());
        return user.getUserShippingList();
    }

}
