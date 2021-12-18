package dev.davidsalomon.ionicproject.repository;

import dev.davidsalomon.ionicproject.entities.Vendor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VendorRepository extends CrudRepository<Vendor, Long> {
}
