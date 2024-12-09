import React, { useContext, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const AddContact = () => {
    const { agendaName } = useParams();
    const navigate = useNavigate();
    const { actions } = useContext(Context);

    const [contactData, setContactData] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setContactData({
            ...contactData,
            [name]: value,
        });
    };

    const handleCreateContactSubmit = (event) => {
        event.preventDefault();
        actions.addContact(agendaName, contactData, navigate);
    };

    return (
        <>
            <Navbar />
            <div className="container rounded my-5 p-3 bg-dark-subtle text-white">
                <h1 className="text-center mb-4">Agregar Nuevo Contacto</h1>

                <form onSubmit={handleCreateContactSubmit}>
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
                        <Link to={`/home/${agendaName}`}>
                            <button type="button" className="animated-button" style={{ padding: "1px 26px" }}>
                                <span className="text2">Volver al listado</span>
                                <span className="circle"></span>
                            </button>
                        </Link>

                        <button type="submit" className="animated-button" style={{ padding: "1px 26px" }}>
                            <span className="text2">Crear nuevo Contacto</span>
                            <span className="circle"></span>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};
