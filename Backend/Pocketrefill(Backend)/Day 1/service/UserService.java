package com.recharge.pocketrefill.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.recharge.pocketrefill.entity.AppUser;
import com.recharge.pocketrefill.entity.Plan;

public interface UserService {
	
	ResponseEntity<?> registerNewUser(AppUser user);

	AppUser findUserNameByEmail(String email);

	List<Plan> findPlansByOperator(String operatorName);

}
