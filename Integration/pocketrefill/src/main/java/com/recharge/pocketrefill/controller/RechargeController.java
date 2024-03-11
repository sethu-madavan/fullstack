package com.recharge.pocketrefill.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.recharge.pocketrefill.entity.Recharge;
import com.recharge.pocketrefill.service.RechargeServiceImpl;

@RestController
@RequestMapping("/recharges")
public class RechargeController {

    @Autowired
    private RechargeServiceImpl rechargeService;

    @GetMapping("/")
    public List<Recharge> getAllRecharges() {
        return rechargeService.getAllRecharges();
    }

    @GetMapping("/{id}")
    public Recharge getRechargeById(@PathVariable Long id) {
        return rechargeService.getRechargeById(id);
    }

    @PostMapping("/{userName}")
    public ResponseEntity<String> createRecharge(@PathVariable String userName ,@RequestBody Recharge recharge) {
        return rechargeService.createRecharge(userName, recharge);
    }

    @PutMapping("/{id}")
    public Recharge updateRecharge(@PathVariable Long id, @RequestBody Recharge recharge) {
        return rechargeService.updateRecharge(id, recharge);
    }

    @DeleteMapping("/{id}")
    public void deleteRecharge(@PathVariable Long id) {
        rechargeService.deleteRecharge(id);
    }
}
