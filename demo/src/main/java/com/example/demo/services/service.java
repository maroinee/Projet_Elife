package com.example.demo.services;

import java.util.Optional;

import com.example.demo.entity.User;





public interface service  {
    Optional<User> getUser(Long id);
    User postUser(User user);
    User updateUser(Long id, User userUpdates);
    void deleteUser(Long id);
    Optional<User> getUserByEmail(String email);

}