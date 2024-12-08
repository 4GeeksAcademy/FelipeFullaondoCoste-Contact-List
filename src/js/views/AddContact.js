import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const AddContact = () => {
	const { store, actions } = useContext(Context);

	return (

		<>
			<Navbar />
			<div className="container rounded mt-5 p-3" style={{ backgroundColor: "#1F509A" }}>
				<div className="mb-3">
					<label className="form-label">Nombre</label>
					<input type="text" className="form-control" />
				</div>
				<div className="mb-3">
					<label className="form-label">Telefono</label>
					<input type="text" className="form-control" />
				</div>
				<div className="mb-3">
					<label className="form-label">Email</label>
					<input type="email" className="form-control" />
				</div>
				<div className="mb-3">
					<label className="form-label">Direccion</label>
					<input type="text" className="form-control" />
				</div>


				<Link to="/home">
					<button class="animated-button" style={{padding: "1px 26px"}}>
						<span class="text2">Volver al listado</span>
						<span class="circle"></span>
					</button>
				</Link>
			</div>
		</>

	);
};
