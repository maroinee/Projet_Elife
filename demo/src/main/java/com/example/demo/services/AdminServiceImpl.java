package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Admin;
import com.example.demo.entity.PostUser;
import com.example.demo.entity.User;
import com.example.demo.repository.AdminRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class AdminServiceImpl implements AdminService {

    private static final Logger logger = LoggerFactory.getLogger(AdminServiceImpl.class);

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private PostServiceImpl postService;

    @Override
    public Optional<Admin> getAdminByEmail(String email) {
        logger.debug("Fetching admin with email: {}", email);
        return adminRepository.findByEmail(email);
    }

    @Override
    public Admin postAdmin(Admin admin) {
        logger.debug("Saving new admin: {}", admin);
        return adminRepository.save(admin);
    }

    @Override
    public void deleteAdmin(Long id) {
        logger.debug("Deleting admin with ID: {}", id);
        adminRepository.deleteById(id);
    }

    @Override
    public Admin updateAdmin(Long id, Admin adminUpdates) {
        logger.debug("Updating admin with ID: {}", id);
        Optional<Admin> optionalAdmin = adminRepository.findById(id);
        if (optionalAdmin.isPresent()) {
            Admin existingAdmin = optionalAdmin.get();
            existingAdmin.setNom(adminUpdates.getNom());
            existingAdmin.setPrenom(adminUpdates.getPrenom());
            existingAdmin.setCin(adminUpdates.getCin());
            existingAdmin.setTelephone(adminUpdates.getTelephone());
            return adminRepository.save(existingAdmin);
        } else {
            logger.error("Admin not found with ID: {}", id);
            throw new RuntimeException("Admin non trouvé avec l'ID : " + id);
        }
    }

    @Override
    public List<Admin> getAllAdmins() {
        logger.debug("Fetching all admins");
        return adminRepository.findAll();
    }

    @Override
    public Optional<User> getUser(Long id) {
        return userService.getUser(id);
    }

    @Override
    public User postUser(User user) {
        return userService.postUser(user);
    }

    @Override
    public User updateUser(Long id, User userUpdates) {
        return userService.updateUser(id, userUpdates);
    }

    @Override
    public void deleteUser(Long id) {
        userService.deleteUser(id);
    }

    @Override
    public Optional<User> getUserByEmail(String email) {
        return userService.getUserByEmail(email);
    }

    @Override
    public PostUser savePost(PostUser post) {
        return postService.savePost(post);
    }

    @Override
    public List<PostUser> getAllPosts() {
        return postService.getAllPosts();
    }

    @Override
    public PostUser getPostById(Long postId) {
        return postService.getPostById(postId);
    }

    @Override
    public PostUser updatePost(Long postId, PostUser postDetails) {
        return postService.updatePost(postId, postDetails);
    }

    @Override
    public void deletePost(Long postId) {
        postService.deletePost(postId);
    }
}
