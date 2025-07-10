package com.dai.ChallengeApp;

public class Challenge {
    private Long id;
    private String month;
    private String name;
    private String description;
    
    public Challenge() {
    }

    public Challenge(Long id, String month, String name, String description) {
        this.id = id;
        this.month = month;
        this.name = name;
        this.description = description;
    }

    public Challenge(Long id, String month, String description) {
        this.id = id;
        this.month = month;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
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
