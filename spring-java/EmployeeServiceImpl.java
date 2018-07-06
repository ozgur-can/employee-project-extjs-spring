package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Employee;
import com.example.repository.EmployeeRepository;

@Service("employeeService")

public class EmployeeServiceImpl implements EmployeeService {
	@Autowired
	EmployeeRepository employeeRepository;

	@Override
	public Employee getEmployeeById(long id) {
		return employeeRepository.findOne(id);
	}

	@Override
	public List<Employee> getAllEmployees() {
		return employeeRepository.findAll();
	}

	@Override
	public Employee addOne(String name, String lastname, boolean active) {
		return employeeRepository.save(new Employee(name, lastname, active));
	}

	@Override
	public Employee updateOne(long id, String name, String lastname, boolean active) {
		Employee a = employeeRepository.findOne(id);
		a.setName(name);
		a.setLastName(lastname);
		a.setActive(active);
		return employeeRepository.save(a);
	}

	@Override
	public void deleteOne(long id) {
		employeeRepository.delete(id);
	}

}