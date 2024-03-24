import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Articals from "./components/Articals";
import Footer from "./components/Footer";

const App = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Articals />
			<Footer/>
	
		</>
	);
};

export default App;
