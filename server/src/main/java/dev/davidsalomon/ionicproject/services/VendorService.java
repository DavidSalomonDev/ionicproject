package dev.davidsalomon.ionicproject.services;

import dev.davidsalomon.ionicproject.entities.Vendor;
import dev.davidsalomon.ionicproject.repository.VendorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VendorService implements IVendorService {

    @Autowired
    private VendorRepository repository;

    @Override
    public List<Vendor> getAll() {
        return (List<Vendor>) repository.findAll();
    }

    @Override
    public Vendor getById(Long id) {
        return repository.findById(id).get();
    }

    @Override
    public void remove(Long id) {
        repository.deleteById(id);
    }

    @Override
    public void save(Vendor vendor) {
        repository.save(vendor);
    }
}
