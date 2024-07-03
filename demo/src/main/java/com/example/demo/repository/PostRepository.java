package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.PostUser;



@Repository
public interface PostRepository extends JpaRepository<PostUser, Long> {
    List<PostUser> findByLieux(String lieux);
}