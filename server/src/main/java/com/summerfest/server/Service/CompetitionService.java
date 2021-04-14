package com.summerfest.server.Service;

import java.util.List;
import java.util.Objects;

import com.summerfest.server.ExceptionHandler.ResouceNotFoundException;
import com.summerfest.server.Model.Competition;
import com.summerfest.server.Respository.CompetitionRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


@Service
public class CompetitionService {
    
    @Autowired
    private CompetitionRepository competitionRepository;

    public ResponseEntity<Object> getAllCompetition(){
        List<Competition> competitionList = competitionRepository.getAllCompetition();
        return new ResponseEntity<Object>(competitionList, HttpStatus.OK);
    }

    public ResponseEntity<Object> getCompetitionById(Integer id){
        Competition competition = competitionRepository.getCompetitionById(id);
        if(Objects.isNull(competition)){
            throw new ResouceNotFoundException("Competiton with id:"+id+" doesn't exists");
        }
        return new ResponseEntity<Object>(competition, HttpStatus.OK);
    }

    public ResponseEntity<Object> addCompetition(Competition competition){
        Competition addedCompetition = competitionRepository.saveCompetition(competition);
        return new ResponseEntity<Object>(addedCompetition, HttpStatus.OK);
    }

}
