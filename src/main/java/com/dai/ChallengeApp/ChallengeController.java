package com.dai.ChallengeApp;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/challenges")
public class ChallengeController {
    private ChallengeServer challengeServer;

    public ChallengeController(ChallengeServer challengeServer) {
        this.challengeServer = challengeServer;
    }

    @GetMapping
    public ResponseEntity<List<Challenge>> getAllChallenges() {
        return  new ResponseEntity<>(challengeServer.getAllChallenges(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<String> addChallenge(@RequestBody Challenge challenge) {
        boolean isChallengeAdded = challengeServer.addChallenge(challenge);

        if (isChallengeAdded) {
            return new ResponseEntity<>("Challenge added successfully!", HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>("Failed to add challenge. Please check the input.", HttpStatus.BAD_REQUEST) ;
        }
    }

    @GetMapping("/{month}")
    public ResponseEntity<Challenge> getChallenge(@PathVariable String month) {
        Challenge challenge = challengeServer.getChallenges(month);
        if(challenge != null) {
            return new ResponseEntity<>(challenge, HttpStatus.OK);
        }
        else return new ResponseEntity<>(challenge, HttpStatus.NOT_FOUND);  
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateChallenge(@PathVariable Long id, @RequestBody Challenge updatedChallenge) {
        boolean isUpdated = challengeServer.updateChallenge(id, updatedChallenge);
        if (isUpdated) {
            return new ResponseEntity<>("Challenge updated successfully!", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Failed to update challenge. Please check the input.", HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteChallenge(@PathVariable Long id) {
        boolean isDeleted = challengeServer.deleteChallenge(id);
        if (isDeleted) {
            return new ResponseEntity<>("Challenge deleted successfully!", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Failed to delete challenge. Please check the input.", HttpStatus.BAD_REQUEST);
        }
    }
}