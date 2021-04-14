package com.summerfest.server.Controller;

import javax.validation.Valid;

import com.summerfest.server.Model.Request.CompetitionRequest;
import com.summerfest.server.Service.CompetitionService;

import org.springframework.beans.factory.annotation.Autowired;
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
@RequestMapping("/api/competitions")
public class CompetitionController {

    @Autowired
    private CompetitionService competitionService;

    @GetMapping
    public ResponseEntity<Object> getCompetition() {
        return competitionService.getAllCompetition();
    }

    @PostMapping
    public ResponseEntity<Object> addCompetition(@Valid @RequestBody CompetitionRequest competition){
        return competitionService.addCompetition(competition);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getComptitionById(@PathVariable("id") Integer id){
        return competitionService.getCompetitionById(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateComptitionById(@Valid @RequestBody CompetitionRequest competition, @PathVariable("id") Integer id){
        return competitionService.updateCompetitionById(competition, id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteComptitionById(@PathVariable("id") Integer id){
        return competitionService.deleteCompetitionById(id);
    }

}
