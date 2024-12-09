import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Login = () => {
    const [loginInputValue, setLoginInputValue] = useState("");
    const navigate = useNavigate();
    
    const { actions } = useContext(Context);



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
                            onChange={(event) => setLoginInputValue(event.target.value)}
                        />
                    </div>
                    <div className="d-flex justify-content-evenly align-items-center">
                        <button 
                            className="animated-button" 
                            style={{ padding: "5px 26px" }} 
                            onClick={() => actions.handleCreateAgenda(loginInputValue, navigate)}
                        >
                            <span className="text2">Crear Agenda</span>
                            <span className="circle"></span>
                        </button>
                        <button 
                            className="animated-button" 
                            style={{ padding: "5px 26px" }}
                            onClick={() => actions.handleLogin(loginInputValue, navigate)}
                        >
                            <span className="text2">Ingresar</span>
                            <span className="circle"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
