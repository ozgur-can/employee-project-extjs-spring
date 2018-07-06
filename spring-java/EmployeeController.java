package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.example.model.Employee;
import com.example.service.EmployeeService;

@RestController
@RequestMapping("/")
public class EmployeeController {
	@EnableWebMvc
	public class WebConfig extends WebMvcConfigurerAdapter {

		@Override
		public void addCorsMappings(CorsRegistry registry) {
			registry.addMapping("/**").allowedOrigins("http://localhost:1841", "*").allowedMethods("POST", "GET", "PUT",
					"DELETE");
		}
	}

	@Autowired
	private EmployeeService employeeService;

	@RequestMapping(value = "/employee", method = RequestMethod.GET)
	public List<Employee> getEmployees() {
		return employeeService.getAllEmployees();
	}

	@RequestMapping(value = "/employee/{id}", method = RequestMethod.GET)
	public Employee getEmployee(@PathVariable("id") long id) {
		return employeeService.getEmployeeById(id);
	}

	@RequestMapping(value = "/employee", method = RequestMethod.POST)
	public Employee addEmployee(String name, String lastname, boolean active) {
		return employeeService.addOne(name, lastname, active);
	}

	@RequestMapping(value = "/employees/{id}", method = RequestMethod.POST)
	public Employee postEmployee(@PathVariable("id") long id,
			@RequestParam(value = "name", required = true) String name,
			@RequestParam(value = "lastname", required = true) String lastname,
			@RequestParam(value = "active", required = true) boolean active) {
		return employeeService.updateOne(id, name, lastname, active);
	}

	@RequestMapping(value = "/employeesDel/{id}", method = RequestMethod.POST)
	public void postEmployee(@PathVariable("id") long id) {
		employeeService.deleteOne(id);
	}
}