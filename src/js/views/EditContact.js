import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "../component/navbar";
import "../../styles/demo.css";

export const EditContact = () => {
    const { agendaName, contactId } = useParams();
    const navigate = useNavigate();

    const [contactData, setContactData] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    });
    const [error, setError] = useState(null);

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

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setContactData({
            ...contactData,
            [name]: value,
        });
    };

    const handleEditContactSubmit = async (event) => {
        event.preventDefault();

        if (!contactData.name || !contactData.phone || !contactData.email || !contactData.address) {
            setError("Todos los campos son obligatorios.");
            return;
        }

        try {
            const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaName}/contacts/${contactId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contactData),
            });

            if (response.ok) {
                alert("Contacto actualizado exitosamente.");
                navigate(`/home/${agendaName}`);
            } else {
                throw new Error("No se pudo actualizar el contacto.");
            }
        } catch (error) {
            setError("Hubo un error al actualizar el contacto.");
            console.error(error);
        }
    };

    return (
        <>
            <Navbar />
            <div className="container rounded my-5 p-3 bg-dark-subtle text-white">
                <h1 className="text-center mb-4">Editar Contacto</h1>

                <div className="row">
                    <div className="col-md-4">
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


                    <div className="col-md-8">
                        <form onSubmit={handleEditContactSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Nombre</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={contactData.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Teléfono</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="phone"
                                    value={contactData.phone}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={contactData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Dirección</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="address"
                                    value={contactData.address}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="d-flex justify-content-evenly align-items-center my-3">
                                <button type="button" className="animated-button" style={{ padding: "1px 26px" }} onClick={() => navigate(`/home/${agendaName}`)}>
                                    <span className="text2">Volver al listado</span>
                                    <span className="circle"></span>
                                </button>

                                <button type="submit" className="animated-button" style={{ padding: "1px 26px" }}>
                                    <span className="text2">Actualizar Contacto</span>
                                    <span className="circle"></span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
