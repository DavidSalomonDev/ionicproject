import Employee from "./Employee";

export function searchEmployees() {
	if (!localStorage["employees"]) {
		localStorage["employees"] = "[]";
	}
	let employees = localStorage["employees"];
	employees = JSON.parse(employees);
	return employees;
}

export function removeEmployee(id: string) {
	let employees = searchEmployees();
	let indexId = employees.findIndex((employee: Employee) => employee.id === id);
	employees.splice(indexId, 1);
	localStorage["employees"] = JSON.stringify(employees);
}

export function saveEmployee(employee: Employee) {
	let employees = searchEmployees();
	if (employee.id) {
		let indexId = employees.findIndex((c: Employee) => c.id === employee.id);
		employees[indexId] = employee;
	} else {
		employee.id = String(Math.round(Math.random() * 1000000));
		employees.push(employee);
	}
	localStorage["employees"] = JSON.stringify(employees);
}

export function searchEmployeeById(id: string) {
	let employees = searchEmployees();
	return employees.find((employee: any) => employee.id === id);
}
