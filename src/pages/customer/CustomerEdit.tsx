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
import { saveCustomer, searchCustomerById } from "./CustomerAPI";
import Customer from "./Customer";

const CustomerEdit: React.FC = () => {

	const { name, id } = useParams<{ name: string; id: string }>();
	const history = useHistory();

	const [customer, setCustomer] = useState<Customer>({});

	const search = () => {
		if (id === "new") {
			setCustomer({});
		} else {
			let result = searchCustomerById(id);
			setCustomer(result);
		}
	};

	useEffect(() => {
		search();
	}, [history.location.pathname]);


	const save = () => {
		saveCustomer(customer);
		history.push("/page/customers");
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
						<IonTitle>{id === "new" ? "Add customer" : "Edit customer"}</IonTitle>
						<IonRow>
							<IonCol>
								<IonItem>
									<IonLabel position = "stacked">First Name</IonLabel>
									<IonInput onIonChange = {e => customer.firstName = String(e.detail.value)}
														value = {customer.firstName}> </IonInput>
								</IonItem>
							</IonCol>
							<IonCol>
								<IonItem>
									<IonLabel position = "stacked">Last Name</IonLabel>
									<IonInput onIonChange = {e => customer.lastName = String(e.detail.value)}
														value = {customer.lastName}> </IonInput>
								</IonItem>
							</IonCol>
						</IonRow>
						<IonRow>
							<IonCol>
								<IonItem>
									<IonLabel position = "stacked">Email</IonLabel>
									<IonInput onIonChange = {e => customer.email = String(e.detail.value)}
														value = {customer.email}> </IonInput>
								</IonItem>
							</IonCol>
							<IonCol>
								<IonItem>
									<IonLabel position = "stacked">Phone</IonLabel>
									<IonInput onIonChange = {e => customer.phone = String(e.detail.value)}
														value = {customer.phone}> </IonInput>
								</IonItem>
							</IonCol>
						</IonRow>
						<IonRow>
							<IonCol>
								<IonItem>
									<IonLabel position = "stacked">Address</IonLabel>
									<IonInput onIonChange = {e => customer.address = String(e.detail.value)}
														value = {customer.address}> </IonInput>
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

export default CustomerEdit;
