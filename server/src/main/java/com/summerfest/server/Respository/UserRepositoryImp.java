package com.summerfest.server.Respository;

import com.summerfest.server.Model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepositoryImp implements UserRepository{

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private static final String INSERT_USER_QUERY="INSERT INTO USER(name,password, email) values(?,?,?)";
    private static final String GET_USER_BY_ID_QUERY="SELECT * FROM USER where ID=?";
    private static final String GET_USER_BY_NAME_QUERY="SELECT * FROM USER where NAME=?";
    private static final String CHECK_NAME_EXISTS_QUERY="SELECT COUNT(*) FROM USER where NAME=?";

    @Override
    public User findUserByName(String name) {
        try {	
            User user = jdbcTemplate.queryForObject(GET_USER_BY_NAME_QUERY, (rs, rowNum)->{
                return new User(rs.getInt("id"), rs.getString("name"), rs.getString("password"), rs.getString("email"));
            }, name);
            return user;
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public User getUserById(Integer id) {
        try {	
            User user = jdbcTemplate.queryForObject(GET_USER_BY_ID_QUERY, (rs, rowNum)->{
                return new User(rs.getInt("id"), rs.getString("name"), rs.getString("password"), rs.getString("email"));
            }, id);
            return user;
        } catch (Exception e) {
            return null;
        }
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
    public User saveUser(User user) {
        jdbcTemplate.update(INSERT_USER_QUERY, user.getName(), user.getPassword(), user.getEmail());
        return user;
    }
    
}
