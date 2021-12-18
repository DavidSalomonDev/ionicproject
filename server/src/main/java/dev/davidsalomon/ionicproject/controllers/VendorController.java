package dev.davidsalomon.ionicproject.controllers;

import dev.davidsalomon.ionicproject.entities.Vendor;
import dev.davidsalomon.ionicproject.services.IVendorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class VendorController {

    @Autowired
    private IVendorService service;

    @GetMapping("/api/vendors")
    public List<Vendor> getAll() {
        return service.getAll();
    }

    @GetMapping("/api/vendors/{id}")
    public Vendor getById(@PathVariable String id) {
        return service.getById(Long.parseLong(id));
    }

    @DeleteMapping("/api/vendors/{id}")
    public void remove(@PathVariable String id) {
        service.remove(Long.parseLong(id));
    }

    @PostMapping("/api/vendors")
    public void save(@RequestBody Vendor vendor) {
        service.save(vendor);
    }
}
