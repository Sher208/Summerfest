package com.summerfest.server.Respository;

import com.summerfest.server.Model.User;

public interface UserRepository {
    User saveUser(User user);
    User getUserById(Integer id);
    User findUserByName(String name);
    Boolean checkNameExists(String name);
}
