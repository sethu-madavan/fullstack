package com.recharge.pocketrefill.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.recharge.pocketrefill.entity.Addon;
import com.recharge.pocketrefill.entity.Payment;
import com.recharge.pocketrefill.entity.Plan;
import com.recharge.pocketrefill.entity.Recharge;
import com.recharge.pocketrefill.service.AddonServiceImpl;
import com.recharge.pocketrefill.service.RechargeServiceImpl;
import com.recharge.pocketrefill.service.UserServiceImpl;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/customer")
@RequiredArgsConstructor
public class UserController {

	private final UserServiceImpl userService;
	private final AddonServiceImpl addonService;
	private final RechargeServiceImpl rechargeService;
	// @PostConstruct
	// public void initRolesAndUSer() {
	// 	userService.initRolesAndUser();
	// }

	@Operation(summary = "Admin route", description = "Accessible only by admin roles.")
	@PreAuthorize("hasAuthority('ROLE_ADMIN')")
	@GetMapping("/forAdmin")
	public String adminRoute() {
		return "Admin Routes";
	}

	@Operation(summary = "View plans by operator name", description = "View plans by operator name.")
	@PreAuthorize("hasRole('CUSTOMER') or hasRole('ADMIN')")
	@GetMapping("/plan/{operatorName}")
	public List<Plan> viewPlan(@Parameter(description = "Operator name") @PathVariable String operatorName) {
		return userService.findPlansByOperator(operatorName);
	}

	@Operation(summary = "Get addons by operator name", description = "Get addons by operator name.")
	@PreAuthorize("hasRole('CUSTOMER') or hasRole('ADMIN')")
	@GetMapping("/getAddons/{operatorName}")
	public List<Addon> getAddons(@Parameter(description = "Operator name") @PathVariable String operatorName) {
		return addonService.getAddOnByOperatorName(operatorName);
	}

	@Operation(summary = "Make recharge", description = "Make recharge for Customers")
	@PreAuthorize("hasRole('CUSTOMER') or hasRole('ADMIN')")
	@PostMapping("/make-recharge/{username}")
	public ResponseEntity<String> makeRecharge(@Parameter(description = "username") @PathVariable String username, @RequestBody Recharge recharge) {
		return rechargeService.createRecharge(username, recharge);
	}

	@Operation(summary = "View Payments", description = "View all payment records")
	@PreAuthorize("hasRole('CUSTOMER') or hasRole('ADMIN')")
	@GetMapping("/get-payments/{username}")
	public List<Payment> getAllPaymentByUsername(@Parameter(description = "username") @PathVariable String username) {
		return userService.getAllPaymentByUsername(username);
	}
}
