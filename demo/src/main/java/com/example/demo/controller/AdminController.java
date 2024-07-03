package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Admin;
import com.example.demo.entity.PostUser;
import com.example.demo.entity.User;
import com.example.demo.services.AdminServiceImpl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/admin")
public class AdminController {

    private static final Logger logger = LoggerFactory.getLogger(AdminController.class);

    @Autowired
    private AdminServiceImpl adminService;

    @PostMapping("/login")
    public ResponseEntity<?> loginAdmin(@RequestBody Admin loginRequest) {
        logger.debug("Received login request for email: {}", loginRequest.getEmail());

        Optional<Admin> adminOptional = adminService.getAdminByEmail(loginRequest.getEmail());

        if (adminOptional.isPresent()) {
            Admin admin = adminOptional.get();
            logger.debug("Admin found: {}", admin);
            if (admin.getPassword().equals(loginRequest.getPassword())) {
                logger.debug("Password matches for email: {}", loginRequest.getEmail());
                return ResponseEntity.ok(admin);
            } else {
                logger.debug("Password mismatch for email: {}", loginRequest.getEmail());
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
            }
        } else {
            logger.debug("Admin not found for email: {}", loginRequest.getEmail());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }
    }

    // Use service method instead of direct repository access
    @GetMapping("/debug/admins")
    public ResponseEntity<List<Admin>> listAllAdmins() {
        return ResponseEntity.ok(adminService.getAllAdmins());
    }

    @PostMapping("/admins")
    public ResponseEntity<Admin> postAdmin(@RequestBody Admin admin) {
        return ResponseEntity.ok(adminService.postAdmin(admin));
    }

    @PutMapping("/admins/{id}")
    public ResponseEntity<Admin> updateAdmin(@PathVariable Long id, @RequestBody Admin adminUpdates) {
        return ResponseEntity.ok(adminService.updateAdmin(id, adminUpdates));
    }

    @DeleteMapping("/admins/{id}")
    public ResponseEntity<Void> deleteAdmin(@PathVariable Long id) {
        adminService.deleteAdmin(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<Optional<User>> getUser(@PathVariable Long id) {
        return ResponseEntity.ok(adminService.getUser(id));
    }

    @PostMapping("/users")
    public ResponseEntity<User> postUser(@RequestBody User user) {
        return ResponseEntity.ok(adminService.postUser(user));
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userUpdates) {
        return ResponseEntity.ok(adminService.updateUser(id, userUpdates));
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        adminService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/users/email/{email}")
    public ResponseEntity<Optional<User>> getUserByEmail(@PathVariable String email) {
        return ResponseEntity.ok(adminService.getUserByEmail(email));
    }

    @PostMapping("/posts")
    public ResponseEntity<PostUser> savePost(@RequestBody PostUser post) {
        return ResponseEntity.ok(adminService.savePost(post));
    }

    @GetMapping("/posts")
    public ResponseEntity<List<PostUser>> getAllPosts() {
        return ResponseEntity.ok(adminService.getAllPosts());
    }

    @GetMapping("/posts/{id}")
    public ResponseEntity<PostUser> getPostById(@PathVariable Long id) {
        return ResponseEntity.ok(adminService.getPostById(id));
    }

    @PutMapping("/posts/{id}")
    public ResponseEntity<PostUser> updatePost(@PathVariable Long id, @RequestBody PostUser postDetails) {
        return ResponseEntity.ok(adminService.updatePost(id, postDetails));
    }

    @DeleteMapping("/posts/{id}")
    public ResponseEntity<Void> deletePost(@PathVariable Long id) {
        adminService.deletePost(id);
        return ResponseEntity.noContent().build();
    }
}
