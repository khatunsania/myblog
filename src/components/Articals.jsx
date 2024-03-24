import React from "react";
import Acard from "./Acard";
const Articals = () => {
	return (
		<>
			<div className="w-[70%] m-auto my-10">
				<h1 className="text-4xl text-[#311a89] font-bold mb-10">
					Recent Articles
				</h1>
				<div className="grid lg:grid-cols-3 md:grid-cols-2">
					<Acard />
					<Acard />
					<Acard />
					<Acard />
					<Acard />
					<Acard />
				</div>
			</div>
		</>
	);
};

export default Articals;
