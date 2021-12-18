package dev.davidsalomon.ionicproject.repository;

import dev.davidsalomon.ionicproject.entities.Customer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long> {
}
