package com.summerfest.server.Model.Request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class AuthenticationRegisterRequest {
    
    @NotBlank(message = "Name is mandatory")
    @Size(min = 6, max = 30, message = "Name criteria not met")
    private String name;

    @NotBlank(message = "Password is mandatory")
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#$@!%&*?])[A-Za-z0-9#$@!%&*?]{8,}$", message="Password cretria not met")
    private String password;

    @NotBlank(message = "Password is mandatory")
    @Pattern(regexp = "^[a-zA-Z0-9.]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)$", message="Email cretria not met")
    private String email;

    public AuthenticationRegisterRequest(
            @NotBlank(message = "Name is mandatory") @Size(min = 6, max = 30, message = "Name criteria not met") String name,
            @NotBlank(message = "Password is mandatory") @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#$@!%&*?])[A-Za-z0-9#$@!%&*?]{8,}$", message = "Password cretria not met") String password,
            @NotBlank(message = "Password is mandatory") @Pattern(regexp = "^[a-zA-Z0-9.]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)$", message = "Email cretria not met") String email) {
        this.name = name;
        this.password = password;
        this.email = email;
    }

    public AuthenticationRegisterRequest() {
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
