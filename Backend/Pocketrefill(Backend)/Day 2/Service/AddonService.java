package com.recharge.pocketrefill.service;

import java.util.List;

import com.recharge.pocketrefill.entity.Addon;

public interface AddonService {

    List<Addon> getAllAddons();

    Addon getAddonById(Long id);

    Addon createAddon(Addon addon);

    Addon updateAddon(Long id, Addon addon);

    void deleteAddon(Long id);

    List<Addon> getAddOnByOperatorName(String operatorName);

    Addon patchUpdateAddon(Long id, Addon updatedAddon);

}
