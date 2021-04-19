package com.summerfest.server.Service;

import java.security.Principal;

import com.summerfest.server.Config.JwtUtils;
import com.summerfest.server.ExceptionHandler.InvalidCredentialException;
import com.summerfest.server.ExceptionHandler.ResouceAlreadyExistsException;
import com.summerfest.server.Model.User;
import com.summerfest.server.Model.Request.AuthenticationRequest;
import com.summerfest.server.Model.Response.AuthenticationResponse;
import com.summerfest.server.Respository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;

    @Autowired
	private PasswordEncoder bcryptEncoder;

    @Autowired
    private AuthenticationManager authenticationManager; 

    @Autowired
    private CustomUserDetailService userDetailService;

    @Autowired
    private JwtUtils jwtUtils;

    public ResponseEntity<Object> addUser(User user) {
        if(userRepository.checkNameExists(user.getName())){
            throw new ResouceAlreadyExistsException("Username Already Taken");
        }
        User newUser = new User();
		newUser.setName(user.getName());
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
        newUser.setEmail(user.getEmail());
        userRepository.saveUser(newUser);
		return new ResponseEntity<Object>(newUser, HttpStatus.OK);
	}



    public ResponseEntity<Object> authenticateUser(AuthenticationRequest authenticationRequest){
        try{
            authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authenticationRequest.getName(), authenticationRequest.getPassword())
            );
        }catch(BadCredentialsException e){
            throw new InvalidCredentialException("Invalid Credentials");
        }
        
        UserDetails userDetails = userDetailService.loadUserByUsername(authenticationRequest.getName());

        String jwt = jwtUtils.generateToken(userDetails);

        return new ResponseEntity<Object>(new AuthenticationResponse(jwt), HttpStatus.OK);
    }

    public ResponseEntity<Object> getCurrentUser(Principal principal) {
        // String username = null;
        // if (principal instanceof UserDetails) {
        //     username = ((UserDetails)principal).getName());
        // } else {
        //     username = principal.toString();
        // }
        User user = userRepository.findUserByName(principal.getName());
        return new ResponseEntity<Object>(user, HttpStatus.OK);
	}

}
