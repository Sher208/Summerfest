package com.summerfest.server.Respository;

import java.util.List;

import com.summerfest.server.Model.Competition;

public interface CompetitionRepository {
        Competition saveCompetition(Competition competition);
        Competition getCompetitionById(Integer id);
        List<Competition> getAllCompetition();
}
