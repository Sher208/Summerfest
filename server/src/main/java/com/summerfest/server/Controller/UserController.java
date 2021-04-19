package com.summerfest.server.Controller;

import java.security.Principal;

import javax.validation.Valid;

import com.summerfest.server.Model.User;
import com.summerfest.server.Service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {
    
    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<Object> getCurrentUser(Principal principal){
        return userService.getCurrentUser(principal);
    }

    // @GetMapping("/{id}")
    // public ResponseEntity<Object> getComptitionById(@PathVariable("id") Integer id){
    //     return competitionService.getCompetitionById(id);
    // }

    // @PutMapping("/{id}")
    // public ResponseEntity<Object> updateComptitionById(@Valid @RequestBody CompetitionRequest competition, @PathVariable("id") Integer id){
    //     return competitionService.updateCompetitionById(competition, id);
    // }

    // @DeleteMapping("/{id}")
    // public ResponseEntity<Object> deleteComptitionById(@PathVariable("id") Integer id){
    //     return competitionService.deleteCompetitionById(id);
    // }
}
