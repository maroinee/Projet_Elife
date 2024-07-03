package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.CommentairePost;

@Repository
public interface CommentaireRepository extends JpaRepository <CommentairePost, Long>{
    List<CommentairePost> findByPostId(Long postId);
}