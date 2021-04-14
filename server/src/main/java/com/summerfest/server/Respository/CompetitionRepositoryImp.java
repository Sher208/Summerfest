package com.summerfest.server.Respository;

import java.util.List;

import com.summerfest.server.Model.Competition;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class CompetitionRepositoryImp implements CompetitionRepository{

    private static final String INSERT_COMPETITION_QUERY="INSERT INTO COMPETITION(id,name,description) values(?,?,?)";
    private static final String GET_COMPETITION_BY_ID_QUERY="SELECT * FROM COMPETITION where ID=?";
    private static final String GET_ALL_COMPETITION="SELECT * FROM COMPETITION";

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public List<Competition> getAllCompetition() {
        return jdbcTemplate.query(GET_ALL_COMPETITION,(rs,rowNum)->{
            return new Competition(rs.getInt("id"), rs.getString("name"), rs.getString("description"));
        });
    }

    @Override
    public Competition getCompetitionById(Integer id) {
        try {	
            Competition competition = jdbcTemplate.queryForObject(GET_COMPETITION_BY_ID_QUERY, (rs, rowNum)->{
                return new Competition(rs.getInt("id"), rs.getString("name"), rs.getString("description"));
            }, id);
            return competition;
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public Competition saveCompetition(Competition competition) {
        jdbcTemplate.update(INSERT_COMPETITION_QUERY, competition.getId(), competition.getName(), competition.getDescription());
        return competition;
    }
    
}
