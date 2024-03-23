import React from "react";
import { CalendarDays } from "lucide-react";
import { Clock } from "lucide-react";

const Hero = () => {
	return (
		<div className="bg-[url('/src/assets/hero-three.jpg')] w-[100%]  md:w-[100%] ">
			<div className="w-[70%] m-auto py-40 lg:flex lg:justify-between md:block ">
				<div className="lg:w-[40%] md:w-[100%] w-[100%]">
					<h3 className="text-xl text-[#fff] py-4 ">By sania khatun</h3>
					<h1 className="text-5xl  w-[100%]  leading-tight text-[#fff] ">
						The best website tamplate layout for your buisness
					</h1>
					<p className="text-2xl text-[#fff] py-5 md:w-[100%]">
						You need to be sure there isn’t anything embarrassing hidden in the
						middle of text
					</p>
					<div>
						<ul className="flex ">
							<li className="flex pr-4">
								{" "}
								<CalendarDays className="text-[#fff]" />
								<span className="pl-1 text-[#cd8a72]"> 23 Mar,2024</span>
							</li>
							<li className="flex">
								<Clock className="text-[#fff]" />
								<span className="pl-1 text-[#cd8a72]">3 min read</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="lg:w-[46%] md:w-[100%] py-10 w-[100%]">
					<div>
						<img
							className="w-[100%] h-[400px] rounded-lg object-cover "
							src="/src/assets/6-1.jpg"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
