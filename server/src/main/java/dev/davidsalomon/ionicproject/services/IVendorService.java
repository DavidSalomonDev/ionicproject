package dev.davidsalomon.ionicproject.services;

import dev.davidsalomon.ionicproject.entities.Vendor;

import java.util.List;

public interface IVendorService {
    List<Vendor> getAll();

    Vendor getById(Long id);

    void remove(Long id);

    void save(Vendor customer);
}
