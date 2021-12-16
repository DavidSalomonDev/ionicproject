export function searchCustomers() {
	if (!localStorage["customers"]) {
		localStorage["customers"] = "[]";
	}
	let customers = localStorage["customers"];
	customers = JSON.parse(customers);
	return customers;

	/*const sampleData = [{
	 id: 1,
	 firstName: "David",
	 lastName: "Salomon",
	 phone: "+50373512572",
	 address: "El Salvador"
	 }, {
	 id: 2,
	 firstName: "David",
	 lastName: "Martinez",
	 phone: "+50373512572",
	 address: "Canada"
	 }];*/
}

export function removeCustomer(id: string) {
	let customers = searchCustomers();
	let indexId = customers.findIndex((customer: any) => customer.id === id);
	customers.splice(indexId, 1);
	localStorage["customers"] = JSON.stringify(customers);
}

export function saveCustomer(customer: any) {
	let customers = searchCustomers();
	customers.push(customer);
	localStorage["customers"] = JSON.stringify(customers);
}
