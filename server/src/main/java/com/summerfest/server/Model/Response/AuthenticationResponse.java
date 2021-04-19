package com.summerfest.server.Model.Response;

public class AuthenticationResponse {
    
    private String jwtToken;

    public AuthenticationResponse(String jwtToken) {
        this.jwtToken = jwtToken;
    }

    public AuthenticationResponse() {
    }

    public String getJwtToken() {
        return jwtToken;
    }

    public void setJwtToken(String jwtToken) {
        this.jwtToken = jwtToken;
    }

    
}
