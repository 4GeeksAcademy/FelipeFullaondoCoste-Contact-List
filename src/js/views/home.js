import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";


const API_BASE_URL = 'https://playground.4geeks.com/contact/agendas/'

export const Home = () => {
	

	const getUsaerAgenda = async () => {
		try {
			const response = await fetch(`${API_BASE_URL}/Felipe`)
		} catch (error) {
			console.log(error);
		}
	}


	return (
		<>
			<Navbar />
			<div className="text-center mt-5">
				<h1>Hello Rigo!</h1>
				<p>
					<img src={rigoImage} />
				</p>
				<a href="#" className="btn btn-success">
					Necesito empezar este proyecto ya!
				</a>
			</div>
		</>
	);
}