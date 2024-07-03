package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import com.example.demo.entity.Admin;
import com.example.demo.entity.PostUser;
import com.example.demo.entity.User;



public interface AdminService {
    Optional<Admin> getAdminByEmail(String email);
    Admin postAdmin(Admin admin);
    void deleteAdmin(Long id);
    Admin updateAdmin(Long id, Admin adminUpdates);
    List<Admin> getAllAdmins(); // Added method to get all admins
    Optional<User> getUser(Long id);
    User postUser(User user);
    User updateUser(Long id, User userUpdates);
    void deleteUser(Long id);
    Optional<User> getUserByEmail(String email);
    PostUser savePost(PostUser post);
    List<PostUser> getAllPosts();
    PostUser getPostById(Long postId);
    PostUser updatePost(Long postId, PostUser postDetails);
    void deletePost(Long postId);
}
