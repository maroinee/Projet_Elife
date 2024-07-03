package com.example.demo.DTO;






import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
@Data
public class SignupRequestDTOHopital {
     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String lieux;
    private int tlf;
    private String email;
    private String password;

    private String codePeronelHopital;
    
   
    
    
}