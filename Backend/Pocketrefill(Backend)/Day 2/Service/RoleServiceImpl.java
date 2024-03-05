package com.recharge.pocketrefill.service;

import org.springframework.stereotype.Service;

import com.recharge.pocketrefill.entity.Role;
import com.recharge.pocketrefill.repository.RoleRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RoleServiceImpl implements RoleService{
	
	private final RoleRepo roleRepo;

	@Override
	public Role registerNewRole(Role role) {
		return roleRepo.save(role);
	}

}
