package com.summerfest.server.ExceptionHandler;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class OperationFailed extends RuntimeException{
    private static final long serialVersionUID = 1L;

    public OperationFailed(String message){
        super(message);
    }    
}
