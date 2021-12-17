import Customer from "./Customer";

export function searchCustomers() {
	if (!localStorage["customers"]) {
		localStorage["customers"] = "[]";
	}
	let customers = localStorage["customers"];
	customers = JSON.parse(customers);
	return customers;
}

export function removeCustomer(id: string) {
	let customers = searchCustomers();
	let indexId = customers.findIndex((customer: Customer) => customer.id === id);
	customers.splice(indexId, 1);
	localStorage["customers"] = JSON.stringify(customers);
}

export function saveCustomer(customer: Customer) {
	let customers = searchCustomers();
	if (customer.id) {
		let indexId = customers.findIndex((c: Customer) => c.id === customer.id);
		customers[indexId] = customer;
	} else {
		customer.id = String(Math.round(Math.random() * 1000000));
		customers.push(customer);
	}
	localStorage["customers"] = JSON.stringify(customers);
}

export function searchCustomerById(id: string) {
	let customers = searchCustomers();
	return customers.find((customer: any) => customer.id === id);
}
