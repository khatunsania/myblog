import React from "react";

const Navbar = () => {
	return (
		<>
			<div className="w-full mt-[30px]">
				<div className="md:w-[70%]  md:m-auto md:flex md:justify-arround items-center">
					<div className="w-[45%]">
						<img
							src="https://bunzo.vuejstemplate.com/images/logo/logo.png"
							alt=""
						/>
					</div>
					<div className="md:w-[35%]">
						<ul className="md:flex capitalize font-bold text-lg text-[#311a89]">
							<li className="mr-10 ">home</li>
							<li className="mr-10">about</li>
							<li className="mr-10">blog</li>
							<li className="mr-10">catagories</li>
							<li className="mr-10">pages</li>
							<li className="mr-10">contact</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
