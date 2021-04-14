package com.summerfest.server.Model.Request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class CompetitionRequest {

    @NotBlank(message = "Name is mandatory")
    @Size(min = 3, max = 30, message = "Name criteria not met")
    private String name;

    @NotBlank(message = "Description is mandatory")
    @Size(min = 5, max = 100, message = "Description criteria not met")
    private String description;

    public CompetitionRequest() {
    }
    
    public CompetitionRequest(
        @NotBlank(message = "Name is mandatory") @Size(min = 3, max = 30, message = "Overflow or underflow name") String name,
        @NotBlank(message = "Description is mandatory") @Size(min = 5, max = 100, message = "Overflow or underflow description") String description) {
        this.name = name;
        this.description = description;
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

    
    
}
