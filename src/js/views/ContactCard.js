import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "../component/navbar";
import "../../styles/demo.css";

export const ContactCard = () => {
    const { agendaName, contactId } = useParams();
    const navigate = useNavigate();

    const [contactData, setContactData] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    });

    useEffect(() => {
        const fetchContact = async () => {
            try {
                const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaName}/contacts/${contactId}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({}),
                });

                if (response.ok) {
                    const data = await response.json();
                    setContactData({
                        name: data.name,
                        phone: data.phone,
                        email: data.email,
                        address: data.address
                    });
                } else {
                    throw new Error("No se pudo cargar el contacto.");
                }
            } catch (error) {
                setError("Hubo un error al cargar el contacto.");
                console.error(error);
            }
        };

        fetchContact();
    }, [agendaName, contactId]);

    return (
        <>
            <Navbar />
            <div className="d-flex justify-content-center align-items-center rounded">
                <div className="card p-4 bg-dark-subtle text-white" style={{ width: "500px" }}>
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">

                        <h1 className="text-center mb-4">Informacion de {contactData.name}</h1>
                        
                        <div className="rounded-container m-3">
                            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" />
                        </div>

                        <div className="contact-preview">
                            <p><strong>Nombre:</strong> {contactData.name}</p>
                            <p><strong>Teléfono:</strong> {contactData.phone}</p>
                            <p><strong>Email:</strong> {contactData.email}</p>
                            <p><strong>Dirección:</strong> {contactData.address}</p>
                        </div>
                    </div>




                    <div className="d-flex justify-content-evenly align-items-center my-3">
                        <button type="button" className="animated-button" style={{ padding: "1px 26px" }} onClick={() => navigate(`/home/${agendaName}`)}>
                            <span className="text2">Volver al listado</span>
                            <span className="circle"></span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
