import React from "react";
import { CalendarDays } from "lucide-react";
import { Clock } from "lucide-react";
import Edit from "./Edit";
import { Link } from "react-router-dom";
import Post from "./Post";
const AdminCard = ({ item, delblog }) => {
	return (
		<>
			<div>
				<div className="lg:w-[90%] md:w-[90%] sm:w-[100%] m-auto shadow my-7 pb-3 text-[#fff] ">
					<img
						className="w-[100%] rounded-lg object-cover"
						src={item?.image}
						alt=""
					/>
					<ul className="flex w-[90%] m-auto">
						<li className="bg-[#edebf5] py-[5px] lg:px-8 md:px-8 px-3 rounded-md mt-3 text-[#606587] mr-3 lg:text-lg md:text-[15px] sm:text-[12px] text-[10px] cursor-pointer hover:text-[#ffffff] hover:bg-[#250c83]">
							{item?.tags}
						</li>
						<li className="mt-3 text-[#606587] text-lg md:text-[15px] sm:text-[12px] text-[9px]">
							{item?.authorName}
						</li>
					</ul>
					<h2 className="py-3 lg:text-[27px] md:text-[20px] sm:text-[24px] text-[15px] text-[#311a89] font-bold lg:px-2 w-[98%] m-auto">
						{item?.title}
					</h2>
					<h1 className="text-[#596066] text-[17px] px-3 w-[100%]">
						{item?.description}
					</h1>
					<ul className="flex justify-arround py-3 px-2 pb-6 w-[100%]">
						<li className="flex pr-5 text-[#596066] align-center">
							<CalendarDays className=" w-[17px]" />
							<span className="pl-1 lg:text-sm md:text-sm sm:text-md text-[10px] lg:mt-[2px] md:mt-0 sm:mt-1 mt-1">
								{" "}
								{item?.createdAt}
							</span>
						</li>
						<li className="flex text-[#596066]">
							<Clock className=" w-[17px]" />
							<span className="pl-1 lg:text-sm md:text-sm sm:text-md text-[10px] lg:mt-[2px] md:mt-0 sm:mt-1 mt-1 ">
								3 min read
							</span>
						</li>
					</ul>
					<ul className="flex justify-between w-[90%] m-auto">
						<Link to={`/edit/${item?.id} `}>
							<li className="bg-[#e2e8f0] px-5 py-1 text-[#63738b] rounded-md">
								<i class="fa-regular fa-pen-to-square"></i>
							</li>
						</Link>

						<li className="bg-[#e2e8f0] px-5 py-1 text-[#63738b] rounded-md">
							<i class="fa-solid fa-trash" onClick={() => delblog(item?.id)}></i>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default AdminCard;
