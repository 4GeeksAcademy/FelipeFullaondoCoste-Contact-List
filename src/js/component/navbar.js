import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";
import "../../styles/buttons.css";

export const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-dark-subtle mb-4 p-4 border-bottom border-black">
				<div className="container justify-content-start">

					<Link to="/login">
						<button className="animated-button mx-2">
							<svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
								></path>
							</svg>
							<span className="text">Login Agendas</span>
							<span className="circle"></span>
							<svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
								></path>
							</svg>
						</button>
					</Link>
					<Link to="/home">
						<button className="animated-button mx-2">
							<svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
								></path>
							</svg>
							<span className="text">Ver Contactos</span>
							<span className="circle"></span>
							<svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
								></path>
							</svg>
						</button>
					</Link>
					<Link to="/add-contact">
						<button className="animated-button mx-2">
							<svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
								></path>
							</svg>
							<span className="text">Agregar Contacto</span>
							<span className="circle"></span>
							<svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
								></path>
							</svg>
						</button>
					</Link>
				</div>
			</nav>
		</>
	);
};
