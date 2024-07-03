package com.example.demo.services;

import java.util.List;

import com.example.demo.entity.PostUser;


public interface PostService {
    PostUser savePost(PostUser post);
    List<PostUser> getAllPosts();
    PostUser getPostById(Long postId);
    PostUser updatePost(Long postId, PostUser postDetails);
    void deletePost(Long postId);
    void likePost(Long postId);
    List<PostUser> searchByLieux(String lieux);
    
}