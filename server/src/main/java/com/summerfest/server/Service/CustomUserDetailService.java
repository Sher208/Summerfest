package com.summerfest.server.Service;

import java.util.ArrayList;
import java.util.Objects;

import com.summerfest.server.ExceptionHandler.ResouceNotFoundException;
import com.summerfest.server.Model.User;
import com.summerfest.server.Respository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailService implements UserDetailsService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {
        User user = userRepository.findUserByName(name);
        if(Objects.isNull(user)){
            throw new ResouceNotFoundException("User not found");
        }
        return new org.springframework.security.core.userdetails.User(user.getName(), user.getPassword(),
        new ArrayList<>());
    }

}
