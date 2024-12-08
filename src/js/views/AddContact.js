import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const AddContact = () => {
	const { store, actions } = useContext(Context);
	const { agendaName } = useParams();

	return (

		<>
			<Navbar />
			<div className="container rounded my-5 p-3 bg-dark-subtle text-white">
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



				<div className="d-flex justify-content-evenly align-items-center my-3">
					<Link to={`/home/${agendaName}`}>
						<button className="animated-button" style={{ padding: "1px 26px" }}>
							<span className="text2">Volver al listado</span>
							<span className="circle"></span>
						</button>
					</Link>
					<Link to={`/home/${agendaName}`}>
						<button className="animated-button" style={{ padding: "1px 26px" }}>
							<span className="text2">Crear nuevo Contacto</span>
							<span className="circle"></span>
						</button>
					</Link>
				</div>
			</div>
		</>

	);
};
