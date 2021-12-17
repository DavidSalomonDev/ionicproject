import {
	IonButton,
	IonButtons,
	IonCard,
	IonCol,
	IonContent,
	IonGrid,
	IonHeader,
	IonIcon,
	IonItem,
	IonMenuButton,
	IonPage,
	IonRow,
	IonTitle,
	IonToolbar
} from "@ionic/react";
import { useHistory, useParams } from "react-router";
import "../Page.css";
import React, { useEffect, useState } from "react";
import { add, close, pencil } from "ionicons/icons";
import { removeEmployee, searchEmployees } from "./EmployeeAPI";
import Employee from "./Employee";

const EmployeeList: React.FC = () => {

	const { name } = useParams<{ name: string; }>();
	const [employees, setEmployees] = useState<Employee[]>([]);
	const history = useHistory();

	useEffect(() => {
		search();
	}, []);

	const search = () => {
		let result = searchEmployees();
		setEmployees(result);
	};

	const remove = (id: string) => {
		removeEmployee(id);
		search();
	};

	const addEmployee = () => {
		history.push("employee/new");
	};

	const editEmployee = (id: string) => {
		history.push("employee/" + id);
	};

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot = "start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>{name}</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonHeader collapse = "condense">
					<IonToolbar>
						<IonTitle size = "large">{name}</IonTitle>
					</IonToolbar>
				</IonHeader>

				{/*//Grid start*/}
				<IonContent>
					<IonCard>
						<IonTitle>Employee Management</IonTitle>
						<IonItem>
							<IonButton onClick = {addEmployee} color = "primary"
												 fill = "solid"
												 slot = "end"
												 size = "default">
								<IonIcon icon = {add} /> Add employee
							</IonButton>
						</IonItem>
						<IonGrid className = "table">
							<IonRow>
								<IonCol>Name</IonCol>
								<IonCol>Email</IonCol>
								<IonCol>Phone</IonCol>
								<IonCol>Salary</IonCol>
								<IonCol>Actions</IonCol>
							</IonRow>

							{employees.map((employee: Employee) => {
								return (
									<IonRow key = {employee.id}>
										<IonCol>{employee.firstName} {employee.lastName}</IonCol>
										<IonCol>{employee.email}</IonCol>
										<IonCol>{employee.phone}</IonCol>
										<IonCol>{employee.salary}</IonCol>
										<IonCol>
											<IonButton onClick = {() => editEmployee(String(employee.id))}
																 color = "primary"
																 fill = "clear">
												<IonIcon icon = {pencil} slot = "icon-only" />
											</IonButton>
											<IonButton onClick = {() => remove(String(employee.id))}
																 color = "danger"
																 fill = "clear">
												<IonIcon icon = {close} slot = "icon-only" />
											</IonButton>
										</IonCol>
									</IonRow>
								);
							})}
						</IonGrid>
					</IonCard>

				</IonContent>
			</IonContent>
		</IonPage>
	);
};

export default EmployeeList;
