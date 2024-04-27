package com.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.Login;
import com.repository.LoginRepository;

@Service
public class LoginService {

	@Autowired
	LoginRepository loginRepository;
	
	public String signUp(Login login) {
	Optional<Login> result = loginRepository.findById(login.getEmailid());
	if(result.isPresent()) {
		return "account already exists";
	}else {
		if(login.getTypeofuser().equals("admin")) {
			return "You can't create admin account";
		}else {
			loginRepository.save(login);
			//customerRepository.save(customer);
			return "Account created successfully";
		}
	}
		
		
		
	}
	
	// custom query 
	// select l from login l where l.emailid = :emailid and l.password = :password and l.typeofuser=:typeofuser
	public String signIn(Login login) {
		
		Optional<Login> result = loginRepository.findById(login.getEmailid());
		
		if(result.isPresent()) {
		
		Login ll = result.get();
		
		if(ll.getPassword().equals(login.getPassword())) {
			
			if(login.getTypeofuser().equals("admin") && ll.getTypeofuser().equals("admin")) {
				return "admin login successfully";
			}else {
				return "customer login successfully";
			}
			
		}else {
			return "Password is invalid";
		}
		
		}else {
			return "Emailid is invalid";
		}
	}
}
