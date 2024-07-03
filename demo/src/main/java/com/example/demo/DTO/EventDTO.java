package com.example.demo.DTO;

import java.util.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Lob;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;

@Data
public class EventDTO {
    private Long id;

    private String name_Event;
    private String lieux;

    @Column(length = 7000)
    private String content;

    private String postedby;

    
    @Temporal(TemporalType.TIMESTAMP)
    private Date date;
    private int likeCount;
    private int viewCount;  
    private List<String> tags; 
    
    @Lob
    @Column (columnDefinition="longblob")
    private byte[] img;
}