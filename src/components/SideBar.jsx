import React from "react";

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
					<p className="text-[#dee4d3]  text-base ">
            <span className="mr-2"><i class="fa-solid fa-pager"></i></span>
            Post</p>
					<p className="text-[#dee4d3]  text-base  py-3">
            <span className="mr-2"><i class="fa-solid fa-plus"></i></span>
            AddPost</p>
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
