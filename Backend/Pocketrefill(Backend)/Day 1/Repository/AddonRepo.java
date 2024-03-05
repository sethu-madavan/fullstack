package com.recharge.pocketrefill.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.recharge.pocketrefill.entity.Addon;

public interface AddonRepo extends JpaRepository<Addon, Long> {

        @Query("SELECT p FROM Addon p WHERE p.OperatorName=?1")
    List<Addon> findByOperatorName(String operatorName);

}
