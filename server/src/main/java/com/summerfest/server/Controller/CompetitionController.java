package com.summerfest.server.Controller;

import javax.validation.Valid;

import com.summerfest.server.Model.Competition;
import com.summerfest.server.Model.Request.CompetitionRequest;
import com.summerfest.server.Service.CompetitionService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/competitions")
public class CompetitionController {

    @Autowired
    private CompetitionService competitionService;

    @GetMapping
    public ResponseEntity<Object> getCompetition() {
        return competitionService.getAllCompetition();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getComptitionById(@PathVariable("id") Integer id){
        return competitionService.getCompetitionById(id);
    }

    @PostMapping
    public ResponseEntity<Object> addCompetition(@Valid @RequestBody CompetitionRequest competition){
        return competitionService.addCompetition(competition);
    }
}
