package com.summerfest.server.Respository;

import java.util.List;

import com.summerfest.server.Model.Competition;
import com.summerfest.server.Model.Request.CompetitionRequest;

public interface CompetitionRepository {
        Integer saveCompetition(CompetitionRequest competition);
        Integer updateCompetition(CompetitionRequest competition, Integer id);
        Integer deleteCompetitionById(Integer id);
        Competition getCompetitionById(Integer id);
        List<Competition> getAllCompetition();
        Boolean checkNameExists(String name);

}
