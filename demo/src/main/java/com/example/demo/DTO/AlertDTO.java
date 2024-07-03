package com.example.demo.DTO;

import java.util.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;

@Data
public class AlertDTO {
     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    private String name;
    private String lieux;

    @Column(length = 7000)
    private String content;

    private String postedby;

    
    @Temporal(TemporalType.TIMESTAMP)
    private Date date;
    private int likeCount;
    private int viewCount;  
    private List<String> tags; 
}