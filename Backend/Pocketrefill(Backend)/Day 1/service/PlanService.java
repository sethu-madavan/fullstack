package com.recharge.pocketrefill.service;

import java.util.List;

import com.recharge.pocketrefill.entity.Plan;

public interface PlanService {

    List<Plan> getAllPlans();

    Plan getPlanById(Long id);

    Plan createPlan(Plan plan);

    Plan updatePlan(Long id, Plan plan);

    void deletePlan(Long id);

}
