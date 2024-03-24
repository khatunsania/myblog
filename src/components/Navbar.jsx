import React from "react";
import { SquareMenu } from "lucide-react";
const Navbar = () => {
	return (
		<>
			<div className="w-full mt-[30px] mb-[30px]">
				<div className="w-[70%] m-auto flex justify-between md:justify-between lg:justify-arround items-center lg:px-5 ">
					<div className="w-[35%]">
						<img
							src="https://bunzo.vuejstemplate.com/images/logo/logo.png"
							alt=""
						/>
					</div>
					<div className="lg:w-[48%]">
						<ul className="md:flex capitalize font-bold lg:text-lg text-[#311a89] hidden md:hidden lg:block font-sans lg:flex ">
							<li className="lg:mr-10">home</li>
							<li className="lg:mr-10">about</li>
							<li className="lg:mr-10">blog</li>
							<li className="lg:mr-10">catagories</li>
							<li className="lg:mr-10">pages</li>
							<li className="lg:mr-10">contact</li>
						</ul>
						<SquareMenu className="lg:hidden md:block  " />
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
