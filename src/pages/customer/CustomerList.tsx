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
import {useParams} from "react-router";
import "../Page.css";
import React, {useEffect, useState} from "react";
import {add, close, pencil} from "ionicons/icons";
import {searchCustomers} from "./CustomerAPI";

const CustomerList: React.FC = () => {

	const {name} = useParams<{ name: string; }>();
	const [customers, setCustomers] = useState<any>([]);

	useEffect(() => {

		search();
	}, []);


	const search = () => {
		let result = searchCustomers();
		setCustomers(result);
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
						<IonTitle>Customer Management</IonTitle>
						<IonItem>
							<IonButton color = "primary"
												 fill = "solid"
												 slot = "end"
												 size = "default">
								<IonIcon icon = {add} /> Add customer
							</IonButton>
						</IonItem>
						<IonGrid className = "table">
							<IonRow>
								<IonCol>Name</IonCol>
								<IonCol>Email</IonCol>
								<IonCol>Phone</IonCol>
								<IonCol>Address</IonCol>
								<IonCol>Actions</IonCol>
							</IonRow>

							{customers.map((customer: any) => {
								return (
									<IonRow key = {customer.id}>
										<IonCol>{customer.firstName} {customer.lastName}</IonCol>
										<IonCol>{customer.email}</IonCol>
										<IonCol>{customer.phone}</IonCol>
										<IonCol>{customer.address}</IonCol>
										<IonCol>
											<IonButton color = "primary" fill = "clear">
												<IonIcon icon = {pencil} slot = "icon-only" />
											</IonButton>
											<IonButton onClick = {() => console.log(customer.id)}
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

export default CustomerList;
