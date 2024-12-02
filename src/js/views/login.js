import React, { useState } from "react";
import "../../styles/home.css";
import { useNavigate } from "react-router";

export const Login = () => {

    /*     const [loginInputValue, setLoginInputValue] = useState("")
    
        const createAgenda = async () => {
            try {
                const response = await fetch ()
    
            } catch (error) {
                console.log(error);
            }
        } */

    const navigate = useNavigate();
    const goHome = () => {
        navigate('/home');
    };

    return (

        <div className="d-flex justify-content-center align-items-center vh-100 shadow rounded">
            <div className="card p-4" style={{ width: "300px" }}>
                <div className="card-body text-center">
                    <h5 className="card-title">Ingrese su usuario</h5>
                    <div className="mb-3">
                        {/* <input
                            type="text"
                            className="form-control"
                            value={loginInputValue}
                            onChange={(event) => setLoginInputValue(event.target.value)} /> */}
                        <input type="text" className="form-control" />
                    </div>
                    <button className="btn btn-primary" onClick={goHome}>Ingresar</button>
                </div>
            </div>
        </div>
    );
}
