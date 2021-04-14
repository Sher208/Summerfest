package com.summerfest.server.ExceptionHandler;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.http.HttpStatus;

public class ErrorModel {

    private LocalDateTime timestamp;
    private HttpStatus status;
    private String message;
    private List<String> errors;


    public ErrorModel(HttpStatus status, String message) {
        this.status = status;
        this.message = message;
        this.timestamp = LocalDateTime.now();
    }

    public ErrorModel(HttpStatus status, String message, List<String> errors) {
        this.status = status;
        this.message = message;
        this.errors = errors;
        this.timestamp = LocalDateTime.now();
    }


    public LocalDateTime getTimestamp() {
        return timestamp;
    }


    public HttpStatus getStatus() {
        return status;
    }


    public String getMessage() {
        return message;
    }

    public List<String> getErrors(){
        return errors;
    }

}



    