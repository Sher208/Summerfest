package com.summerfest.server.ExceptionHandler;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class ResouceAlreadyExistsException extends RuntimeException{

    private static final long serialVersionUID = 1L;

    public ResouceAlreadyExistsException(String message){
        super(message);
    }
}
