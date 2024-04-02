import React from "react";
import { CalendarDays } from "lucide-react";
import { Clock } from "lucide-react";

const Acard = ({item}) => {
	return (
		<>
			
				<div className="w-[100%]">
					<div className="lg:w-[90%] md:w-[90%] sm:w-[100%] m-auto">
						<img
							className="w-[100%] h-[200px] rounded-lg object-cover"
							src={item?.image}
							alt=""
						/>
						<ul className="flex ">
							<li className="bg-[#edebf5] py-[5px] lg:px-8 md:px-8 px-3 rounded-md mt-3 text-[#606587] mr-3 lg:text-lg md:text-[15px] sm:text-[12px] text-[10px] cursor-pointer hover:text-[#ffffff] hover:bg-[#250c83]">{item?.tags}</li>
							<li className="mt-3 text-[#606587] text-lg md:text-[15px] sm:text-[12px] text-[9px]">By sania khatun</li>
						</ul>
						<h2 className="py-3 lg:text-[27px] md:text-[20px] sm:text-[24px] text-[15px] text-[#311a89] font-bold lg:px-2 w-[98%] m-auto">{item?.title}</h2>
						<p className="text-[#596066] text-[17px] px-2 w-[100%]">
							You need to be sure there isn’t anything embarrassing hidden in
							the middle of text
						</p>
                        <ul className="flex justify-arround py-3 px-2 pb-6 w-[100%]">
						<li className="flex pr-5 text-[#596066] align-center">
							{" "}
							<CalendarDays className=" w-[17px]"/>
							<span className="pl-1 lg:text-sm md:text-sm sm:text-md text-[10px] lg:mt-0 md:mt-0 sm:mt-1 mt-1"> 23 Mar,2024</span>
						</li>
						<li className="flex text-[#596066]">
							<Clock className=" w-[17px]" />
							<span className="pl-1 lg:text-sm md:text-sm sm:text-md text-[10px] lg:mt-0 md:mt-0 sm:mt-1 mt-1 ">3 min read</span>
						</li>
					</ul>
					</div>
				
				</div>
		
		</>
	);
};

export default Acard;
