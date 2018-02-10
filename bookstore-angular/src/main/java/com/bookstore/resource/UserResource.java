package com.bookstore.resource;

import com.bookstore.config.SecurityUtility;
import com.bookstore.domain.security.User;
import com.bookstore.domain.security.Role;
import com.bookstore.domain.security.UserRole;
import com.bookstore.service.UserService;
import com.bookstore.utility.MailConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

@RestController
@RequestMapping("/user")
public class UserResource {

    @Autowired
    private UserService userService;

    @Autowired
    private MailConstructor mailConstructor;

    @Autowired
    private JavaMailSender mailsender;

    @RequestMapping(value = "/newUser", method = RequestMethod.POST)
    public ResponseEntity newUserPost(@RequestBody Map<String, String> mapper) throws Exception{
        String username = mapper.get("username");
        String userEmail = mapper.get("email");

        if(userService.findByUsername(username) != null)
            return new ResponseEntity("usernameExists", HttpStatus.BAD_REQUEST);
        if(userService.findByEmail(userEmail) != null)
            return new ResponseEntity("emailExists", HttpStatus.BAD_REQUEST);

        User user = new User();
        user.setUsername(username);
        user.setEmail(userEmail);

        String password = SecurityUtility.randomPassword();
        String encryptedPassword = SecurityUtility.passwordEncoder().encode(password);
        user.setPassword(encryptedPassword);

        Role role = new Role();
        role.setRoleId(1);
        role.setName("ROLE_USER");
        Set<UserRole> userRoles = new HashSet<>();
        userRoles.add(new UserRole(user, role));
        user.getUserRoles().addAll(userRoles);
        userService.createUser(user);

        SimpleMailMessage email = mailConstructor.constructNewUserEmail(user, password);
        mailsender.send(email);

        return new ResponseEntity("User added success!", HttpStatus.OK);
    }

    @RequestMapping(value = "/getPassword", method = RequestMethod.POST)
    public ResponseEntity forgetPasswordPost(@RequestBody String emailAddress) throws Exception{
        User user = userService.findByEmail(emailAddress);
        if(user == null)
            return new ResponseEntity("emailNotExists", HttpStatus.BAD_REQUEST);

        String password = SecurityUtility.randomPassword();
        String encryptedPassword = SecurityUtility.passwordEncoder().encode(password);
        user.setPassword(encryptedPassword);
        userService.save(user);

        SimpleMailMessage email = mailConstructor.constructNewUserEmail(user, password);
        mailsender.send(email);
        return new ResponseEntity("Email sent!", HttpStatus.OK);
    }

    @RequestMapping(value = "/updateUserInfo", method = RequestMethod.POST)
    public ResponseEntity profileInfo(@RequestBody HashMap<String, Object> mapper)throws Exception{
        Long id = Long.valueOf((int) mapper.get("id")) ;
        String email = (String) mapper.get("email");
        String username = (String) mapper.get("username");
        String firstName = (String) mapper.get("firstName");
        String lastName = (String) mapper.get("lastName");
        String newPassword = (String) mapper.get("newPassword");
        String currentPassword = (String) mapper.get("currentPassword");

        User currentUser = userService.findById(id);

        if(currentUser == null)
            throw new Exception("User not found");

        if(userService.findByEmail(email) != null){
            if(userService.findByEmail(email).getUserId() != currentUser.getUserId())
                return new ResponseEntity("Email already exists", HttpStatus.BAD_REQUEST);
        }

        if(userService.findByUsername(email) != null){
            if(userService.findByUsername(email).getUserId() != currentUser.getUserId())
                return new ResponseEntity("Username already exists", HttpStatus.BAD_REQUEST);
        }

        BCryptPasswordEncoder passwordEncoder = SecurityUtility.passwordEncoder();
        String dbPassword = currentUser.getPassword();
        if (currentPassword != null && !currentPassword.isEmpty()) {
            if (passwordEncoder.matches(currentPassword, dbPassword)) {

                if (email != null && !email.isEmpty())
                    currentUser.setEmail(email);

                if (newPassword != null && !newPassword.isEmpty())
                    currentUser.setPassword(passwordEncoder.encode(newPassword));
            } else {
                return new ResponseEntity("Incorrect password", HttpStatus.BAD_REQUEST);
            }
        }


        currentUser.setFirstName(firstName);
        currentUser.setLastName(lastName);
        currentUser.setUsername(username);

        userService.save(currentUser);

        return new ResponseEntity("Update success", HttpStatus.OK);
    }

    @RequestMapping("/getCurrentUser")
    public User getCurrentUser(Principal principal){
        User user = new User();
        if(principal != null)
            user = userService.findByUsername(principal.getName());
        return user;
    }
}
