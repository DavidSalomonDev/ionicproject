package dev.davidsalomon.ionicproject.repository;

import dev.davidsalomon.ionicproject.entities.Employee;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Long> {
}
