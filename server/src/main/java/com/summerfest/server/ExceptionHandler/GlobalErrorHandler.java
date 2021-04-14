package com.summerfest.server.ExceptionHandler;

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
import org.springframework.web.context.request.WebRequest;


@Order(Ordered.HIGHEST_PRECEDENCE)
@ControllerAdvice
public class GlobalErrorHandler{


    @ExceptionHandler(ResouceNotFoundException.class)
    public ResponseEntity<Object> handleResourceNotFoundException(ResouceNotFoundException ex){
        ErrorModel err = new ErrorModel(HttpStatus.NOT_FOUND, ex.getMessage());
        return new ResponseEntity<>(err, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(ResouceAlreadyExistsException.class)
    public ResponseEntity<Object> handleResourceAlreadyException(ResouceAlreadyExistsException ex){
        ErrorModel err = new ErrorModel(HttpStatus.CONFLICT, ex.getMessage());
        return new ResponseEntity<>(err, HttpStatus.CONFLICT);
    }


    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Object> handleMethodArgumentNotValidException(MethodArgumentNotValidException ex){
        List<String> details = new ArrayList<String>();
        details = ex.getBindingResult()
                        .getFieldErrors()
                        .stream()
                        .map(error -> error.getObjectName()+ " : " +error.getDefaultMessage())
                        .collect(Collectors.toList());
        ErrorModel err = new ErrorModel(HttpStatus.BAD_REQUEST, "Validation Error", details);
        return new ResponseEntity<>(err, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(OperationFailed.class)
    public ResponseEntity<Object> handleOperationFailed(OperationFailed ex){
        ErrorModel err = new ErrorModel(HttpStatus.BAD_REQUEST, ex.getMessage());
        return new ResponseEntity<>(err, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Object> handleAll(Exception ex, HttpStatus status, WebRequest request) {
		ErrorModel err = new ErrorModel(HttpStatus.BAD_GATEWAY, ex.getMessage());
		return new ResponseEntity<>(err, HttpStatus.BAD_GATEWAY);
	}
    
}
