package com.example.demo.services.authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.DTO.SignupRequestDTO;
import com.example.demo.DTO.UserDto;
import com.example.demo.entity.User;
import com.example.demo.enums.UserRole;
import com.example.demo.repository.UserRepository;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService{

    @Autowired
    private  UserRepository userRepository;
    public UserDto signupDonneur(SignupRequestDTO signupRequestDTO){
        User user = new User();

       
        user.setFirstName(signupRequestDTO.getFirstName());
        user.setLastName(signupRequestDTO.getLastName());
        user.setLieux(signupRequestDTO.getLieux());
       
        user.setTelephone(signupRequestDTO.getTlf());
        user.setEmail(signupRequestDTO.getEmail());
        user.setPassword(new BCryptPasswordEncoder().encode(signupRequestDTO.getPassword()));
        user.setGroupSang(signupRequestDTO.getGroupSang());

        user.setRole(UserRole.DONNEUR);
        return userRepository.save(user).getDto();
    }

    public Boolean presentByEmail(String email){
        return userRepository.findFirstByEmail(email) !=null;
    }

    public UserDto signupHopital(SignupRequestDTO signupRequestDTO){
        User user = new User();

       
        user.setFirstName(signupRequestDTO.getFirstName());
        
        user.setLieux(signupRequestDTO.getLieux());
       
        user.setTelephone(signupRequestDTO.getTlf());
        user.setEmail(signupRequestDTO.getEmail());
        user.setPassword(new BCryptPasswordEncoder().encode(signupRequestDTO.getPassword()));
        user.setCodePeronelHopital(signupRequestDTO.getCodePeronelHopital());
        

        user.setRole(UserRole.HOPITAL);
        return userRepository.save(user).getDto();
    }

    public UserDto signupAssociation(SignupRequestDTO signupRequestDTO){
        User user = new User();

       
        user.setFirstName(signupRequestDTO.getFirstName());
        
        user.setLieux(signupRequestDTO.getLieux());
       
        user.setTelephone(signupRequestDTO.getTlf());
        user.setEmail(signupRequestDTO.getEmail());
        user.setPassword(new BCryptPasswordEncoder().encode(signupRequestDTO.getPassword()));
        user.setCodePeronelAssociation(signupRequestDTO.getCodePeronelAssociation());
        

        user.setRole(UserRole.ASSOCIATION);
        return userRepository.save(user).getDto();
    }

    public UserDto signupBankSang(SignupRequestDTO signupRequestDTO){
        User user = new User();

       
        user.setFirstName(signupRequestDTO.getFirstName());
        
        user.setLieux(signupRequestDTO.getLieux());
       
        user.setTelephone(signupRequestDTO.getTlf());
        user.setEmail(signupRequestDTO.getEmail());
        user.setPassword(new BCryptPasswordEncoder().encode(signupRequestDTO.getPassword()));
        user.setCodePeronelBankSang(signupRequestDTO.getCodePeronelBankSang());
        

        user.setRole(UserRole.BANKSANG);
        return userRepository.save(user).getDto();
    }

    
    
}