import React, { useEffect, useState } from "react";
import { Navbar } from "../component/navbar";
import "../../styles/home.css";
import "../../styles/cardImages.css"
import { useParams } from "react-router";

export const Home = () => {
	const [contacts, setContacts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	const {agendaName} = useParams();
	const baseUrl = `https://playground.4geeks.com/contact/agendas/${agendaName}`;

	// useEffect para cargar contactos al montar
	useEffect(() => {
		const fetchContacts = async () => {
			try {
				const response = await fetch(baseUrl, {
					method: "GET",
					headers: {
						"accept": "application/json"
					}
				});

				if (response.ok) {
					const data = await response.json();
					setContacts(data.contacts || []); // se asignan los contactos obtenidos
				} else {
					throw new Error(`Error ${response.status}: No se pudieron obtener los contactos.`);
				}
			} catch (error) {
				console.error("Error al obtener contactos:", error.message);
				setError("No se pudo cargar la lista de contactos.");
			} finally {
				setIsLoading(false); // carga finalizada
			}
		};

		fetchContacts();
	}, []);



	//funcion para eliminar contacto
	const handleDeleteContact = async (contactId) => {
		if (!window.confirm("¿Estás seguro de que quieres eliminar este contacto?")) {
			return;
		}
		
		const deleteUrl = `https://playground.4geeks.com/contact/agendas/${agendaName}/contacts/${contactId}`;

		try {
			const response = await fetch(deleteUrl, {
				method: "DELETE",
				headers: {
					"accept": "application/json",
				},
			});

			if (response.ok) {
				setContacts(contacts.filter((contact) => contact.id !== contactId));
				alert("Contacto eliminado exitosamente.");
			} else {
				console.error(`Error ${response.status}: ${response.statusText}`);
				alert("No se pudo eliminar el contacto.");
			}
		} catch (error) {
			console.error("Error al eliminar el contacto:", error.message);
			alert("Hubo un error al eliminar el contacto.");
		}
	};

	return (
		<>
			<Navbar />
			<div className="container mt-4">
				<h1 className="text-center mb-4">Contactos de la Agenda</h1>

				{isLoading && <p className="text-center">Cargando contactos...</p>}
				{error && <p className="text-center text-danger">{error}</p>}

				{!isLoading && !error && contacts.length === 0 && (
					<p className="text-center">No hay contactos en esta agenda.</p>
				)}

				{!isLoading && !error && contacts.length > 0 && (
					<ul className="list-group">
						{contacts.map((contact, index) => (
							<li key={index} className="list-group-item d-flex justify-content-between align-items-center text-white mb-1" style={{ backgroundColor: "#393E46" }}>
								<div className="d-flex justify-content-between align-items-center mx-3 my-1">
									<div className="rounded-container mx-3">
										<img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" />
									</div>

									<div className="mx-3">
										<strong>{contact.name}</strong>
										<p className="mb-0">{contact.address}</p>
										<p className="mb-0">{contact.phone}</p>
										<p className="mb-0">{contact.email}</p>
									</div>
								</div>

								<div className="d-flex justify-content-between align-items-center mx-3 my-1">
									<button
										className="animated-button mx-2"
										style={{ padding: "4px 12px" }}
									>
										<span className="text2">
											<i className="bi bi-pencil-fill" style={{ fontSize: "1.5rem" }}></i>
										</span>
										<span className="circle"></span>
									</button>
									<button
										className="animated-button mx-2"
										style={{ padding: "4px 12px" }}
										onClick={() => handleDeleteContact(contact.id)}
									>
										<span className="text2">
											<i className="bi bi-trash-fill" style={{ fontSize: "1.5rem" }}></i>
										</span>
										<span className="circle"></span>
									</button>
								</div>

							</li>
						))}
					</ul>
				)}
			</div>
		</>
	);
};
