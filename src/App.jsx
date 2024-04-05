import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Details from "./Pages/Details";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/details" element={<Details />} />

			</Routes>

			<Footer />
		</>
	);
};

export default App;
