package com.summerfest.server.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Objects;

import com.summerfest.server.ExceptionHandler.OperationFailed;
import com.summerfest.server.ExceptionHandler.ResouceAlreadyExistsException;
import com.summerfest.server.ExceptionHandler.ResouceNotFoundException;
import com.summerfest.server.Model.Competition;
import com.summerfest.server.Model.Request.CompetitionRequest;
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

    public ResponseEntity<Object> addCompetition(CompetitionRequest competition){
        HashMap<String, String> map = new HashMap<>();
        if(competitionRepository.checkNameExists(competition.getName())){
            throw new ResouceAlreadyExistsException("Competition with Name:"+competition.getName()+" already present");
        }
        Integer check = competitionRepository.saveCompetition(competition);
        if(check==0){
            throw new OperationFailed("Record could not be inserted");
        }
        map.put("message", "Record added");
        return new ResponseEntity<Object>(map, HttpStatus.OK);
    }

    public ResponseEntity<Object> updateCompetitionById(CompetitionRequest competition, Integer id){
        HashMap<String, String> map = new HashMap<>();
        Integer check = competitionRepository.updateCompetition(competition, id);
        if(check==0){
            throw new OperationFailed("Updating Failed");
        }
        map.put("message", "Record updated");
        return new ResponseEntity<Object>(map, HttpStatus.OK);
    }

    public ResponseEntity<Object> deleteCompetitionById(Integer id){
        HashMap<String, String> map = new HashMap<>();
        Integer check = competitionRepository.deleteCompetitionById(id);
        if(check==0){
            throw new OperationFailed("Could not be deleted");
        }
        map.put("message", "Record deleted");
        return new ResponseEntity<Object>(map, HttpStatus.OK);
    }

}
