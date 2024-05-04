import React from "react";
import { Link } from "react-router-dom";
import Admin from "../Pages/Admin";
import Addpost from "./Addpost";
const SideBar = () => {
	return (
		<>
			<div className="w-[15%]  bg-[#1c2434] h-[100vh]">
				<div className="w-[70%] m-auto">
					<h2 className="text-3xl text-[#dee4d3]  py-7 pb-20 align-center ">
						<span className="mr-2 text-2xl rounded-[50%] border border-[#fff] px-1.5">
							<i class="fa-solid fa-user"></i>
						</span>
						Admin
					</h2>
					<Link to={"/admin"}>
					<p className="text-[#dee4d3]  text-base ">
				
				<span className="mr-2"><i class="fa-solid fa-pager"></i></span>
	Post</p>
					</Link>
					
			
					
					<Link to={"/add/post"}>
					<p className="text-[#dee4d3]  text-base  py-3">
						
						<span className="mr-2"><i class="fa-solid fa-plus"></i></span>
						AddPost</p>
					</Link>
       
				
					<p className="text-[#dee4d3]  text-base  ">
            <span className="mr-2"><i class="fa-regular fa-comment"></i></span>
            Comments</p>
					<p className="text-[#dee4d3]  text-base py-3  ">
            <span className="mr-2"><i class="fa-solid fa-right-from-bracket"></i></span>
            Log out</p>
				</div>
			</div>
		</>
	);
};

export default SideBar;
