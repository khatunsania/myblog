import React from "react";
import Acard from "./Acard";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Articals = () => {
	const [blog, setBlog] = useState([]);
	async function getBlog() {
		const { data } = await axios.get("http://localhost:3000/article");
		setBlog(data);
		console.log(data);
	}
	useEffect(function () {
		getBlog();
	}, []);
	return (
		<>
			<div className="w-[70%] m-auto my-10">
				<h1 className="text-4xl text-[#311a89] font-bold mb-10">
					Recent Articles
				</h1>
				<div className="grid lg:grid-cols-3 md:grid-cols-2">
					{blog?.map((item, index) => (
						<>
							<Acard item={item}/>
						</>
					))}
				</div>
			</div>
		</>
	);
};

export default Articals;
