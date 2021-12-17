import {
	IonButton,
	IonButtons,
	IonCard,
	IonCol,
	IonContent,
	IonHeader,
	IonIcon,
	IonInput,
	IonItem,
	IonLabel,
	IonMenuButton,
	IonPage,
	IonRow,
	IonTitle,
	IonToolbar
} from "@ionic/react";
import { useHistory, useParams } from "react-router";
import "../Page.css";
import React, { useEffect, useState } from "react";
import { checkmark } from "ionicons/icons";
import { saveEmployee, searchEmployeeById } from "./EmployeeAPI";
import Employee from "./Employee";

const EmployeeEdit: React.FC = () => {

	const { name, id } = useParams<{ name: string; id: string }>();
	const history = useHistory();

	const [employee, setEmployee] = useState<Employee>({});

	const search = () => {
		if (id === "new") {
			setEmployee({});
		} else {
			let result = searchEmployeeById(id);
			setEmployee(result);
		}
	};

	useEffect(() => {
		search();
	}, [search, history.location.pathname]);


	const save = () => {
		saveEmployee(employee);
		history.push("/page/employees");
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
						<IonTitle>{id === "new" ? "Add employee" : "Edit employee"}</IonTitle>
						<IonRow>
							<IonCol>
								<IonItem>
									<IonLabel position = "stacked">First Name</IonLabel>
									<IonInput onIonChange = {e => employee.firstName = String(e.detail.value)}
														value = {employee.firstName}> </IonInput>
								</IonItem>
							</IonCol>
							<IonCol>
								<IonItem>
									<IonLabel position = "stacked">Last Name</IonLabel>
									<IonInput onIonChange = {e => employee.lastName = String(e.detail.value)}
														value = {employee.lastName}> </IonInput>
								</IonItem>
							</IonCol>
						</IonRow>
						<IonRow>
							<IonCol>
								<IonItem>
									<IonLabel position = "stacked">Email</IonLabel>
									<IonInput onIonChange = {e => employee.email = String(e.detail.value)}
														value = {employee.email}> </IonInput>
								</IonItem>
							</IonCol>
							<IonCol>
								<IonItem>
									<IonLabel position = "stacked">Phone</IonLabel>
									<IonInput onIonChange = {e => employee.phone = String(e.detail.value)}
														value = {employee.phone}> </IonInput>
								</IonItem>
							</IonCol>
						</IonRow>
						<IonRow>
							<IonCol>
								<IonItem>
									<IonLabel position = "stacked">Address</IonLabel>
									<IonInput onIonChange = {e => employee.address = String(e.detail.value)}
														value = {employee.address}> </IonInput>
								</IonItem>
							</IonCol>
						</IonRow>
						<IonRow>
							<IonCol>
								<IonItem>
									<IonLabel position = "stacked">Salary</IonLabel>
									<IonInput onIonChange = {e => employee.salary = Number(e.detail.value)}
														value = {employee.salary}> </IonInput>
								</IonItem>
							</IonCol>
						</IonRow>

						<IonItem>
							<IonButton onClick = {save}
												 color = "success"
												 fill = "solid"
												 slot = "end"
												 size = "default">
								<IonIcon icon = {checkmark} /> Save
							</IonButton>
						</IonItem>
					</IonCard>
				</IonContent>
			</IonContent>
		</IonPage>
	);
};

export default EmployeeEdit;
