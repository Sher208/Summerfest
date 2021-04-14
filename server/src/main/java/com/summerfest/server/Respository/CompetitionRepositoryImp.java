package com.summerfest.server.Respository;

import java.util.List;

import com.summerfest.server.Model.Competition;
import com.summerfest.server.Model.Request.CompetitionRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class CompetitionRepositoryImp implements CompetitionRepository{

    private static final String INSERT_COMPETITION_QUERY="INSERT INTO COMPETITION(name,description) values(?,?)";
    private static final String UPDATE_COMPETITION_BY_ID_QUERY="UPDATE COMPETITION SET NAME=?, DESCRIPTION=? WHERE ID=?";
    private static final String DELETE_COMPETITION_BY_ID_QUERY="DELETE FROM COMPETITION WHERE ID=?";
    private static final String GET_COMPETITION_BY_ID_QUERY="SELECT * FROM COMPETITION where ID=?";
    private static final String CHECK_NAME_EXISTS_QUERY="SELECT COUNT(*) FROM COMPETITION where NAME=?";
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
    public Integer saveCompetition(CompetitionRequest competition) {
        int inserted = jdbcTemplate.update(INSERT_COMPETITION_QUERY, competition.getName(), competition.getDescription());
        return inserted;
    }
    
    @Override
    public Boolean checkNameExists(String Name){
        int count = jdbcTemplate.queryForObject(CHECK_NAME_EXISTS_QUERY, Integer.class, Name);
        if(count==1){
            return true;
        }else{
            return false;
        }
    }

    @Override
    public Integer updateCompetition(CompetitionRequest competition, Integer id){
        int updated = jdbcTemplate.update(UPDATE_COMPETITION_BY_ID_QUERY, competition.getName(), competition.getDescription(), id);
        return updated;
    }

    @Override
    public Integer deleteCompetitionById(Integer id){
        int delete = jdbcTemplate.update(DELETE_COMPETITION_BY_ID_QUERY, id);
        return delete;
    }
}
