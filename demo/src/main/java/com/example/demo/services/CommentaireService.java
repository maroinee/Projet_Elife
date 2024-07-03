package com.example.demo.services;

import java.util.List;

import com.example.demo.entity.CommentairePost;



public interface CommentaireService {
    CommentairePost createComment(Long postId, String content);
    List<CommentairePost> getCommentByPostId(Long postId);
    CommentairePost updateComment(Long commentId, String content);
    void deleteComment(Long commentId);
}