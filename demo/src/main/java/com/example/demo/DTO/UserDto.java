package com.example.demo.DTO;

import java.time.LocalDate;


import com.example.demo.enums.UserRole;


import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
@Data
public class UserDto {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String lieux;
    private int tlf;
    private String email;
    private String password;
    private String groupSang;
    private LocalDate dateOfBirth;
    private boolean accountLocked;
    private boolean enabled;
   
    private UserRole role;
    
}