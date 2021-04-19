package com.summerfest.server.Controller;

import javax.validation.Valid;

import com.summerfest.server.Model.User;
import com.summerfest.server.Model.Request.AuthenticationRequest;
import com.summerfest.server.Service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<Object> register(@Valid @RequestBody User user){
        return userService.addUser(user);
    }

    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody AuthenticationRequest authenticationRequest){
        return userService.authenticateUser(authenticationRequest);
    }
}
