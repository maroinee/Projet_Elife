package com.example.demo.DTO;

import java.util.Date;
import java.util.List;

import lombok.Data;

@Data
public class PostDTO {
    private Long id;
    private String name;
    private String lieux;
    private String content;
    private String postedby;
    private Date date;
    private int likeCount;
    private int viewCount;
    private List<String> tags;
    private byte[] img;
}
