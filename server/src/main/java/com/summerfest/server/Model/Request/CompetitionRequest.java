package com.summerfest.server.Model.Request;

public class CompetitionRequest {
    private String name;
    private String description;
    
    public CompetitionRequest(String name, String description) {
        this.name = name;
        this.description = description;
    }
    public CompetitionRequest() {
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
