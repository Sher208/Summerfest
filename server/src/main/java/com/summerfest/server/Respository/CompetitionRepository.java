package com.summerfest.server.Respository;

import java.util.List;

import com.summerfest.server.Model.Competition;
import com.summerfest.server.Model.Request.CompetitionRequest;

public interface CompetitionRepository {
        int saveCompetition(CompetitionRequest competition);
        Competition getCompetitionById(Integer id);
        List<Competition> getAllCompetition();
        Boolean checkNameExists(String name);
}
