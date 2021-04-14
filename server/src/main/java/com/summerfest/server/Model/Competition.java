package com.summerfest.server.Model;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;

public class Competition {

    @Id
    private Integer id;

    @NotBlank(message = "Name is mandatory")
    @Size(min = 3, max = 30, message = "Name criteria not met")
    private String name;

    @NotBlank(message = "Description is mandatory")
    @Size(min = 5, max = 100, message = "Description criteria not met")
    private String description;

    public Competition(){}

    public Competition(Integer id,
            @NotBlank(message = "Name is mandatory") @Size(min = 3, max = 30, message = "Overflow or underflow name") String name,
            @NotBlank(message = "Description is mandatory") @Size(min = 5, max = 100, message = "Overflow or underflow description") String description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Competition orElseThrow(Object object) {
        return null;
    }


    
}
