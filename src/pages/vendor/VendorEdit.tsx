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
import { saveVendor, searchVendorById } from "./VendorAPI";
import Vendor from "./Vendor";

const VendorEdit: React.FC = () => {

	const { name, id } = useParams<{ name: string; id: string }>();
	const history = useHistory();

	const [vendor, setVendor] = useState<Vendor>({});

	const search = () => {
		if (id === "new") {
			setVendor({});
		} else {
			let result = searchVendorById(id);
			setVendor(result);
		}
	};

	useEffect(() => {
		search();
	}, [history.location.pathname]);


	const save = () => {
		saveVendor(vendor);
		history.push("/page/vendors");
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
						<IonTitle>{id === "new" ? "Add vendor" : "Edit vendor"}</IonTitle>
						<IonRow>
							<IonCol>
								<IonItem>
									<IonLabel position = "stacked">First Name</IonLabel>
									<IonInput onIonChange = {e => vendor.firstName = String(e.detail.value)}
														value = {vendor.firstName}> </IonInput>
								</IonItem>
							</IonCol>
							<IonCol>
								<IonItem>
									<IonLabel position = "stacked">Last Name</IonLabel>
									<IonInput onIonChange = {e => vendor.lastName = String(e.detail.value)}
														value = {vendor.lastName}> </IonInput>
								</IonItem>
							</IonCol>
						</IonRow>
						<IonRow>
							<IonCol>
								<IonItem>
									<IonLabel position = "stacked">Email</IonLabel>
									<IonInput onIonChange = {e => vendor.email = String(e.detail.value)}
														value = {vendor.email}> </IonInput>
								</IonItem>
							</IonCol>
							<IonCol>
								<IonItem>
									<IonLabel position = "stacked">Phone</IonLabel>
									<IonInput onIonChange = {e => vendor.phone = String(e.detail.value)}
														value = {vendor.phone}> </IonInput>
								</IonItem>
							</IonCol>
						</IonRow>
						<IonRow>
							<IonCol>
								<IonItem>
									<IonLabel position = "stacked">Address</IonLabel>
									<IonInput onIonChange = {e => vendor.address = String(e.detail.value)}
														value = {vendor.address}> </IonInput>
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

export default VendorEdit;
