package com.recharge.pocketrefill.service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.recharge.pocketrefill.entity.AppUser;
import com.recharge.pocketrefill.entity.Payment;
import com.recharge.pocketrefill.entity.Plan;
import com.recharge.pocketrefill.entity.Role;
import com.recharge.pocketrefill.repository.AppUserRepo;
import com.recharge.pocketrefill.repository.PaymentRepo;
import com.recharge.pocketrefill.repository.PlanRepo;
import com.recharge.pocketrefill.repository.RoleRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

	private final AppUserRepo userRepo;

	private final PlanRepo planRepo;

	private final RoleRepo roleRepo;

	private final PaymentRepo paymentRepo;

	private final PasswordEncoder passwordEncoder;

	@Override
	public ResponseEntity<?> registerNewUser(AppUser user) {
		String name = user.getUserName();
		String email = user.getEmail();

		AppUser existingUserEmail = userRepo.findByEmail(email);
		AppUser existingUser = userRepo.findByUserName(name);


		if (existingUser != null || existingUserEmail != null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body("User already exists with this email or username");
		}

		Role role = roleRepo.findById("CUSTOMER").orElseThrow(() -> new RuntimeException("Role 'CUSTOMER' not found"));
		
		Set<Role> roles = new HashSet<>();
		roles.add(role);
		user.setRole(roles);
		user.setUserPassword(getEncodedPassword(user.getUserPassword()));
		user.setMobileNumber(user.getMobileNumber());
		user.setOperatorName(user.getOperatorName());
		AppUser savedUser = userRepo.save(user);
		return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
	}

	public void initRolesAndUser() {
		
		Role adminRole = new Role();
		adminRole.setRoleName("ADMIN");
		adminRole.setRoleDescription("Admin Role");
		roleRepo.save(adminRole);

		Role userRole = new Role();
		userRole.setRoleName("CUSTOMER");
		userRole.setRoleDescription("Customer Role");
		roleRepo.save(userRole);

		AppUser admin = new AppUser();
		admin.setUserName("sethu");
		admin.setUserPassword(getEncodedPassword("sethu12345"));
		admin.setMobileNumber(6369442740L);
		admin.setEmail("sethu@gmail.com");
		admin.setLocation("Coimbatore");
		Set<Role> roles = new HashSet<>();
		roles.add(adminRole);
		admin.setRole(roles);
		userRepo.save(admin);

	}

	public String getEncodedPassword(String password) {
		return passwordEncoder.encode(password);
	}

	@Override
	public AppUser findUserNameByEmail(String email) {
		return userRepo.findByEmail(email);
	}

	@Override
	public List<Plan> findPlansByOperator(String operatorName){
		return planRepo.findByOperatorName(operatorName);
	}
	  public Plan getLatestReord(String username) {
		List<Payment> tar = paymentRepo.findLatestRecordByUsername(username); 
        return tar.get(0).getRecharge().getPlan();
    }
	public List<Payment> getAllPaymentByUsername(String username){
		return paymentRepo.getPaymentByUserName(username);
	}

}
