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
import { removeVendor, searchVendors } from "./VendorAPI";
import Vendor from "./Vendor";

const VendorList: React.FC = () => {

	const { name } = useParams<{ name: string; }>();
	const [vendors, setVendors] = useState<Vendor[]>([]);
	const history = useHistory();

	useEffect(() => {
		search();
	}, []);

	const search = () => {
		let result = searchVendors();
		setVendors(result);
	};

	const remove = (id: string) => {
		removeVendor(id);
		search();
	};

	const addVendor = () => {
		history.push("vendor/new");
	};

	const editVendor = (id: string) => {
		history.push("vendor/" + id);
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
						<IonTitle>Vendor Management</IonTitle>
						<IonItem>
							<IonButton onClick = {addVendor} color = "primary"
												 fill = "solid"
												 slot = "end"
												 size = "default">
								<IonIcon icon = {add} /> Add vendor
							</IonButton>
						</IonItem>
						<IonGrid className = "table">
							<IonRow>
								<IonCol>Name</IonCol>
								<IonCol>Email</IonCol>
								<IonCol>Phone</IonCol>
								<IonCol>Web</IonCol>
								<IonCol>Actions</IonCol>
							</IonRow>

							{vendors.map((vendor: Vendor) => {
								return (
									<IonRow key = {vendor.id}>
										<IonCol>{vendor.name} {vendor.name}</IonCol>
										<IonCol>{vendor.email}</IonCol>
										<IonCol>{vendor.phone}</IonCol>
										<IonCol>{vendor.web}</IonCol>
										<IonCol>
											<IonButton onClick = {() => editVendor(String(vendor.id))}
																 color = "primary"
																 fill = "clear">
												<IonIcon icon = {pencil} slot = "icon-only" />
											</IonButton>
											<IonButton onClick = {() => remove(String(vendor.id))}
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

export default VendorList;
