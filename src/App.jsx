import React, { useState } from "react";

import Details from "./Pages/Details";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
const App = () => {
	return (
		<>
		
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/details/:id" element={<Details />} />
				<Route path="/admin" element={<Admin />} />
			</Routes>

			{/* <Footer /> */}
		</>
	);
};

export default App;
