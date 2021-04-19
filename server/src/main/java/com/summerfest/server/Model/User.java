package com.summerfest.server.Model;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;

public class User {
    @Id
    private Integer id;

    @NotBlank(message = "Name is mandatory")
    @Size(min = 3, max = 30, message = "Name criteria not met")
    private String name;

    @NotBlank(message = "Password is mandatory")
    @Size(min = 5, max = 100, message = "Password criteria not met")
    private String password;

    private String email;

    public User(
            @NotBlank(message = "Name is mandatory") @Size(min = 3, max = 30, message = "Name criteria not met") String name,
            @NotBlank(message = "Password is mandatory") @Size(min = 5, max = 100, message = "Password criteria not met") String password,
            String email) {
        this.name = name;
        this.password = password;
        this.email = email;
    }

    public User() {
    }

    

    public User(Integer id,
            @NotBlank(message = "Name is mandatory") @Size(min = 3, max = 30, message = "Name criteria not met") String name,
            @NotBlank(message = "Password is mandatory") @Size(min = 5, max = 100, message = "Password criteria not met") String password,
            String email) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.email = email;
    }

    public Integer getId() {
        return id;
    }
    

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    
    
}
