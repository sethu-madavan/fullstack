package com.recharge.pocketrefill.DTO;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class JwtRequest {
	
	private String userName;
	private String userPassword;
	
}
