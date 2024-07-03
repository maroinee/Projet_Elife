package com.example.demo.DTO;






import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
@Data
public class SignupRequestDTO {
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
    private String codePeronelHopital;
    private String codePeronelAssociation;
    private String codePeronelBankSang;

   
    
    
}