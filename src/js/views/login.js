import React, { useState } from "react";
import { useNavigate } from "react-router";
import "../../styles/home.css";

export const Login = () => {
    const [loginInputValue, setLoginInputValue] = useState("");
    const navigate = useNavigate();

    const baseUrl = "https://playground.4geeks.com/contact/agendas/";

    // Función para crear una agenda
    const handleCreateAgenda = async () => {
        if (!loginInputValue.trim()) {
            alert("Ingresa un nombre válido.");
            return;
        }

        try {
            const createResponse = await fetch(`${baseUrl}${loginInputValue}`, {
                method: "POST",
                headers: {
                    "accept": "application/json"
                }
            });

            if (createResponse.ok) {
                const data = await createResponse.json();
                console.log("Agenda creada:", data);
                alert(`Agenda '${loginInputValue}' creada exitosamente.`);
                navigate(`/home/${loginInputValue.trim()}`);
            } else if (createResponse.status === 400) {
                alert("La agenda ya existe. Por favor, intenta con otro nombre.");
            } else {
                console.error("Error al crear la agenda:", createResponse.status);
                alert("No se pudo crear la agenda. Intenta nuevamente.");
            }

        } catch (error) {
            console.error("Error en la solicitud:", error.message);
            alert("Hubo un error al conectar con el servidor.");
        }
    };


    // Función para verificar y redirigir al usuario
    const handleLogin = async () => {
        if (!loginInputValue.trim()) {
            alert("Por favor ingresa un nombre válido.");
            return;
        }

        try {
            const checkResponse = await fetch(`${baseUrl}${loginInputValue}`, {
                method: "GET",
                headers: {
                    "accept": "application/json"
                }
            });

            if (checkResponse.ok) {
                console.log("Agenda encontrada. Redirigiendo a /home.");
                alert(`Bienvenido a la agenda '${loginInputValue}'`);
                navigate(`/home/${loginInputValue.trim()}`);
            } else if (checkResponse.status === 404) {
                alert("La agenda no existe. Por favor, crea una nueva o verifica el nombre.");
            } else {
                console.error("Error al verificar agendas:", checkResponse.status);
                alert("No se pudo verificar si la agenda existe. Intenta nuevamente.");
            }
        } catch (error) {
            console.error("Error en la solicitud:", error.message);
            alert("Hubo un error al conectar con el servidor. Verifica tu conexión.");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 shadow rounded">
            <div className="card p-4 bg-dark-subtle text-white" style={{ width: "500px" }}>
                <div className="card-body text-center">
                    <h5 className="card-title mb-2"><strong>Ingrese su usuario</strong></h5>
                    <div className="my-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nombre de la agenda"
                            value={loginInputValue}
                            onChange={(e) => setLoginInputValue(e.target.value)}
                        />
                    </div>
                    <div className="d-flex justify-content-evenly align-items-center">
                        <button className="animated-button" style={{ padding: "5px 26px" }}>
                            <span className="text2" onClick={handleCreateAgenda}>Crear Agenda</span>
                            <span className="circle"></span>
                        </button>
                        <button className="animated-button" style={{ padding: "5px 26px" }}>
                            <span className="text2" onClick={handleLogin}>Ingresar</span>
                            <span className="circle"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
