import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-black mb-4 p-3">
				<div className="container justify-content-evenly">
					<Link to="/home">
						<span className="btn btn-primary" >Ir a Inicio</span>
					</Link>
					<Link to="/add-contact">
						<span className="btn btn-success">Nuevo Contacto</span>
					</Link>
				</div>
			</nav>
		</>
	);
};
