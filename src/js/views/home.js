import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import "../../styles/home.css";
import "../../styles/cardImages.css";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export const Home = () => {
    const { store, actions } = useContext(Context); // Accede al store y las acciones
    const { agendaName } = useParams();

    useEffect(() => {
        if (agendaName) {
            actions.fetchContacts(agendaName); // Llama a la acción para cargar los contactos
        }
    }, [agendaName]);

    const { contacts } = store; // Obtiene los contactos desde el store

    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <h1 className="text-center mb-4">
                    Contactos de <strong>{agendaName}</strong>
                </h1>

                {contacts === undefined && (
                    <p className="text-center">Cargando contactos...</p>
                )}

                {contacts?.length === 0 && (
                    <p className="text-center">No hay contactos en esta agenda.</p>
                )}

                {contacts?.length > 0 && (
                    <ul className="list-group">
                        {contacts.map((contact, index) => (
                            <li
                                key={index}
                                className="list-group-item d-flex justify-content-between align-items-center text-white mb-1"
                                style={{ backgroundColor: "#393E46" }}
                            >
                                <div className="d-flex justify-content-between align-items-center mx-3 my-1">
                                    <div className="rounded-container mx-3">
                                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" />
                                    </div>

                                    <div className="mx-3">
                                        <strong>{contact.name}</strong>
                                        <p className="mb-0">
                                            <i className="bi bi-geo-alt-fill"></i> -{" "}
                                            {contact.address}
                                        </p>
                                        <p className="mb-0">
                                            <i className="bi bi-telephone-fill"></i> -{" "}
                                            {contact.phone}
                                        </p>
                                        <p className="mb-0">
                                            <i className="bi bi-envelope-fill"></i> -{" "}
                                            {contact.email}
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between align-items-center mx-3 my-1">
                                    <Link to={`/home/${agendaName}/edit-contact/${contact.id}`}>
                                        <button
                                            className="animated-button mx-2"
                                            style={{ padding: "4px 12px" }}
                                        >
                                            <span className="text2">
                                                <i
                                                    className="bi bi-pencil-fill"
                                                    style={{ fontSize: "1.5rem" }}
                                                ></i>
                                            </span>
                                            <span className="circle"></span>
                                        </button>
                                    </Link>

                                    <button
                                        className="animated-button mx-2"
                                        style={{ padding: "4px 12px" }}
                                        onClick={() => actions.deleteContact(contact.id)}
                                    >
                                        <span className="text2">
                                            <i
                                                className="bi bi-trash-fill"
                                                style={{ fontSize: "1.5rem" }}
                                            ></i>
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
