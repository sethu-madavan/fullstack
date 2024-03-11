package com.recharge.pocketrefill.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.recharge.pocketrefill.entity.Plan;


public interface PlanRepo extends JpaRepository<Plan, Long> {

    @Query("SELECT p FROM Plan p WHERE p.OperatorName=?1")
    List<Plan> findByOperatorName(String operatorName);

}
