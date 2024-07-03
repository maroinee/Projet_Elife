package com.example.demo.entity;


import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.example.demo.DTO.UserDto;
import com.example.demo.enums.UserRole;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import jakarta.persistence.EntityListeners;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
@EntityListeners(AuditingEntityListener.class)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    private String lieux;
    private int telephone;
    private String email;
    private String password;
    private String groupSang;
    private String codePeronelHopital;
    private String codePeronelAssociation;
    private String codePeronelBankSang;

    

   

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private UserRole role;

    public UserDto getDto() {
        UserDto userDto = new UserDto();
        userDto.setId(id);
        userDto.setFirstName(firstName);
        userDto.setLastName(lastName);
        userDto.setLieux(lieux);
        userDto.setTlf(telephone);
        userDto.setGroupSang(groupSang);
        userDto.setEmail(email);
        userDto.setRole(role);
        return userDto;
    }
}
