package dev.davidsalomon.ionicproject.services;

import dev.davidsalomon.ionicproject.entities.Employee;

import java.util.List;

public interface IEmployeeService {
    List<Employee> getAll();

    Employee getById(Long id);

    void remove(Long id);

    void save(Employee customer);
}
