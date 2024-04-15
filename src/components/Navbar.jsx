import React from "react";
import { SquareMenu } from "lucide-react";
import { Link } from "react-router-dom";
import Login from "../Pages/Login";
const Navbar = () => {
	return (
		<>
			<div className="w-full mt-[30px] mb-[30px]">
				<div className="w-[70%] m-auto flex justify-between md:justify-between lg:justify-arround items-center lg:px-5 ">
					<div className="w-[23%]">
						<img src="/public/img/logo.png" alt="" />
					</div>
					<div className="lg:w-[50%]">
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
					<div className="w-[12%]">
						<Link to={"/login"}>
							<button className="border-2 border-[#311a89] px-10 py-2 rounded-full text-[#311a89] font-semibold">
								Log in
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
