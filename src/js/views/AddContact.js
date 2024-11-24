import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const AddContact = () => {
	const { store, actions } = useContext(Context);

	return (

		<div className="container bg-white rounded p-3">
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
			
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>

	);
};
