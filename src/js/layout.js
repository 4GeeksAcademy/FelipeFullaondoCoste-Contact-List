import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Home } from "./views/home";
import { AddContact } from "./views/AddContact";
import { ContactCard } from "./views/ContactCard";
import injectContext from "./store/appContext";

import { Footer } from "./component/footer";
import { Login } from "./views/login";
import { EditContact } from "./views/EditContact";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Routes>
					<Route path="/" element={<Navigate to="/login" replace />} />
					<Route path="/login" element={<Login />} />
					<Route path="/home/:agendaName" element={<Home />} />
					<Route path="/add-contact/:agendaName" element={<AddContact />} />
					<Route path="/home/:agendaName/edit-contact/:contactId" element={<EditContact />} />
					<Route path="//home/:agendaName/detail-contact/:contactId" element={<ContactCard />} />
					<Route path="*" element={<h1>Not found!</h1>} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
