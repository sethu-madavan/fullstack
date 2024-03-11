package com.recharge.pocketrefill.service;

import java.util.List;

import com.recharge.pocketrefill.entity.Addon;
import com.recharge.pocketrefill.entity.AppUser;
import com.recharge.pocketrefill.entity.Plan;

public interface AdminService {

    List<AppUser> getAllUsers();

    AppUser registerNewAdmin(AppUser user);

    List<AppUser> searchUsers(String searchTerm);

    List<Plan> findPlans();

    List<Addon> getAddOn();

    boolean addPlan(Plan plan);

    boolean addAddon(Addon addon);

}
