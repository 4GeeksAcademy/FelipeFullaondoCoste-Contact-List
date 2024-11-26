import React from "react";
import { Link } from "react-router-dom "

const EditContact = () => {
	return (
		<>
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
		</>
	)
}