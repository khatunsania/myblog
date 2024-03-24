import React from "react";
import { CalendarDays } from "lucide-react";
import { Clock } from "lucide-react";

const Hero = () => {
	return (
		<div className="bg-[url('/src/assets/hero-three.jpg')] w-[100%]  md:w-[100%] ">
			<div className="w-[70%] m-auto py-40 lg:flex lg:justify-between md:block ">
				<div className="lg:w-[40%] md:w-[100%] w-[100%]">
					<h3 className="text-xl text-[#fff] py-4 ">By sania khatun</h3>
					<h1 className="lg:text-5xl md:text-4xl text-2xl  w-[100%]   text-[#fff] font-bold ">
						The best website tamplate layout for your buisness
					</h1>
					<p className="lg:text-2xl md:text-2xl text-xl text-[#fff] py-5 md:w-[100%]">
						You need to be sure there isn’t anything embarrassing hidden in the
						middle of text
					</p>
					<div>
						<ul className="flex ">
							<li className="flex pr-4">
								{" "}
								<CalendarDays className="text-[#fff] lg:w-[20px] md:w-[20px] w-[15px] " />
								<span className="pl-1 text-[#cd8a72] lg:text-base md:text-base sm:text-sm text-[12px] lg:mt-0 md:mt-0 mt-1"> 23 Mar,2024</span>
							</li>
							<li className="flex">
								<Clock className="text-[#fff] lg:w-[20px] md:w-[20px] w-[15px] " />
								<span className="pl-1 text-[#cd8a72] lg:text-base md:text-base sm:text-sm text-[12px] lg:mt-0 md:mt-0 mt-1">3 min read</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="lg:w-[46%] md:w-[100%] py-10 w-[100%]">
					<div>
						<img
							className="w-[100%] lg:h-[400px] md:h-[350px] h-[250px] rounded-lg object-cover "
							src="/img/6-1.jpg"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
