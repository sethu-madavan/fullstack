package com.recharge.pocketrefill.service;

import java.util.List;

import com.recharge.pocketrefill.entity.Payment;

public interface PaymentService {

    List<Payment> getAllPayments();

    Payment getPaymentById(Long id);

    Payment createPayment(Payment payment);

    Payment updatePayment(Long id, Payment payment);

    void deletePayment(Long id);

}
