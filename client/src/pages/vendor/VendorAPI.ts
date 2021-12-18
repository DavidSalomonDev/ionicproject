import Vendor from "./Vendor";

export async function searchVendors() {
	let url = process.env.REACT_APP_API + "vendors";
	let response = await fetch(url, {
		"method": "GET",
		"headers": {
			"Content-Type": "application/json"
		}
	});
	return await response.json();
}

export async function removeVendor(id: string) {
	let url = process.env.REACT_APP_API + "vendors/" + id;
	await fetch(url, {
		"method": "DELETE",
		"headers": {
			"Content-Type": "application/json"
		}
	});
}

export async function saveVendor(vendor: Vendor) {
	let url = process.env.REACT_APP_API + "vendors";
	await fetch(url, {
		"method": "POST",
		"body": JSON.stringify(vendor),
		"headers": {
			"Content-Type": "application/json"
		}
	});
}

export async function searchVendorById(id: string) {
	let url = process.env.REACT_APP_API + "vendors/" + id;
	let response = await fetch(url, {
		"method": "GET",
		"headers": {
			"Content-Type": "application/json"
		}
	});
	return await response.json();
}
