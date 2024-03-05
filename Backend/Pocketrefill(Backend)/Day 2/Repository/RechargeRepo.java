package com.recharge.pocketrefill.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.recharge.pocketrefill.entity.Recharge;


public interface RechargeRepo extends JpaRepository<Recharge, Long> {

    @Query(value = "SELECT u FROM Recharge u WHERE u.app_user.userName = ?1")
    List<Recharge> findByApp_user(String username);

}
