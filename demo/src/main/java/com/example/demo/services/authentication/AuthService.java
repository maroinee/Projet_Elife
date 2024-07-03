package com.example.demo.services.authentication;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.example.demo.DTO.SignupRequestDTO;
import com.example.demo.DTO.UserDto;

;

@Service
@Component

public interface AuthService {
     UserDto signupDonneur(SignupRequestDTO signupRequestDTO);
     Boolean presentByEmail(String email);
     UserDto signupHopital(SignupRequestDTO signupRequestDTO);
     UserDto signupAssociation(SignupRequestDTO signupRequestDTO);
     UserDto signupBankSang(SignupRequestDTO signupRequestDTO);
}