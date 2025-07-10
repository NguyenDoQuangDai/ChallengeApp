package com.dai.ChallengeApp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ChallengeServer {
    private List<Challenge> challenges = new ArrayList<>();
    private Long nextId = 1L;

    public ChallengeServer() {
       
    }

    public List<Challenge> getAllChallenges() {
        return challenges;
    }

    public Boolean addChallenge(Challenge challenge) {
        if(challenge != null) {
            challenge.setId(nextId++);
            challenges.add(challenge);
            return true;
        } else {
            return false;
        }
    }

    public Challenge getChallenges(String month) {
        for (Challenge challenge : challenges) {
            if(challenge.getMonth().equalsIgnoreCase(month)) {
                return challenge;
            }
        }

        return null;
    }

    public boolean updateChallenge(Long id, Challenge updatedChallenge) {
        for (Challenge challenge : challenges) {
            if(challenge.getId().equals(id)) {
                challenge.setMonth(updatedChallenge.getMonth());
                challenge.setName(updatedChallenge.getName());
                challenge.setDescription(updatedChallenge.getDescription());
                return true;
            }
        }
        return false;
    }

    public boolean deleteChallenge(Long id) {
        return challenges.removeIf(challenge -> challenge.getId().equals(id));
    }
}
