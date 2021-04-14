package com.summerfest.server.ExceptionHandler;

import java.io.IOException;
import java.net.http.HttpHeaders;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@Order(Ordered.HIGHEST_PRECEDENCE)
@ControllerAdvice
public class GlobalErrorHandler{


    @ExceptionHandler(ResouceNotFoundException.class)
    public ResponseEntity<Object> handleResourceNotFoundException(ResouceNotFoundException ex){
        ErrorModel err = new ErrorModel(HttpStatus.NOT_FOUND, ex.getMessage());
        return new ResponseEntity<>(err, HttpStatus.NOT_FOUND);
    }


    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Object> methodArgumentNotValidException(MethodArgumentNotValidException ex){
        List<String> details = new ArrayList<String>();
        details = ex.getBindingResult()
                        .getFieldErrors()
                        .stream()
                        .map(error -> error.getObjectName()+ " : " +error.getDefaultMessage())
                        .collect(Collectors.toList());
        ErrorModel err = new ErrorModel(HttpStatus.BAD_REQUEST, "Validation Error", details);
        return new ResponseEntity<>(err, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Object> handleAll(Exception ex, WebRequest request) {
		ErrorModel err = new ErrorModel(HttpStatus.BAD_GATEWAY, ex.getMessage());
		return new ResponseEntity<>(err, HttpStatus.BAD_GATEWAY);
	}
    
}
