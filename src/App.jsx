import React, { useState } from "react";

import Details from "./Pages/Details";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import Login from "./Pages/Login";
import Addpost from "./components/Addpost";
import Edit from "./components/Edit";
const App = () => {
	return (
		<>
		
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/details/:id" element={<Details />} />
				<Route path="/admin" element={<Admin />} />
				<Route path="/login" element={<Login />} />
				<Route path="/add/post" element={<Addpost />} />
				<Route path="/edit/:id" element={<Edit />} />

			</Routes>

			<Footer />
		</>
	);
};

export default App;
