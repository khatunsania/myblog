import React from "react";
import { Facebook } from 'lucide-react';
import { Linkedin } from 'lucide-react';

const Details = () => {
	return (
		<>
			<div>
				<div className="w-[70%] m-auto mt-20">
					<ul className="w-[35%] m-auto flex">
						<li className="mr-5">by sania khatun</li>
						<li className="mr-5">12 apr 2023</li>
						<li className="mr-5">3 min read</li>
					</ul>
					<div className="w-[70%] m-auto">
						<p className="text-4xl font-semibold mt-2 py-3 w-[100%]">
							The best website template layout for your business
						</p>
					</div>

					<div className="w-[15%] m-auto">
						<p className="text-center bg-[#edebf5] py-[5px] lg:px-1 md:px-8 px-3 rounded-md mt-3 text-[#606587] mr-3 lg:text-lg md:text-[15px] sm:text-[12px] text-[10px] cursor-pointer hover:text-[#ffffff] hover:bg-[#250c83] mb-3 ">
							javascript
						</p>
					</div>
					<div className="w-[100%]">
						<img
							className="w-[100%] my-7 rounded-lg"
							src="/img/6-1.jpg "
							alt=""
						/>
                        <div className="w-[90%] m-auto">

                      
						<p className="py-3 text-[#5c5d5d] text-[16px] ">
							{" "}
							There are many variations of passages of Lorem Ipsum available,
							but the majority have suffered alteration in some form, by
							injected humour, or randomised words which don’t look even
							slightly believable. If you are going to use a passage of Lorem
							Ipsum, you need to be sure there isn’t anything embarrassing
							hidden in the middle of text. All the Lorem Ipsum generators on
							the Internet tend to repeat predefined chunks as necessary, making
							this the first true generator on the Internet.
						</p>
						<p className="text-2xl font-semibold">
							Create beautiful designs that will help convert more customers
						</p>
						<p className="py-3 text-base text-[#5c5d5d]">
							passages of Lorem Ipsum available, but the majority have suffered
							alteration in some form, by injected humour, or randomised words
							which don’t look even slightly believable. If you are going to use
							a passage of Lorem Ipsum, you need to be sure there isn’t anything
							embarrassing hidden in the middle of text.
						</p>
						<ul className="py-3 text-[#5c5d5d] text-base">
							<li>
								you need to be sure there isn’t anything embarrassing hidden in
								the middle of text. All the Lorem Ipsum generators on the
								Internet tend to repeat predefined chunks as necessary
							</li>
							<li className="py-3 text-[#5c5d5d] text-base">
								you need to be sure there isn’t anything embarrassing hidden in
								the middle of text. All the Lorem Ipsum
							</li>
							<li className="text-[#5c5d5d] text-base">
								embarrassing hidden in the middle of text. All the Lorem Ipsum
								generators on the Internet tend to repeat predefined
							</li>
							<li className="text-[#5c5d5d] py-3 text-base">
								you need to be sure there isn’t anything embarrassing hidden in
								the middle of text. All the Lorem Ipsum generators on the
								Internet tend to repeat predefined chunks as necessary
							</li>
						</ul>
                      <div className="w-[100%]">

                      <ul className="border-y border-[5c5d5d] flex justify-between w-[100%] py-5"> 
                            <li>Share this article:</li>
                            <li>   <Facebook /> </li>
                        
                            </ul>
                      </div>

                 
                        <textarea className="border border-[#c2c6cc] w-[100%] py-7 rounded-md pl-4 my-5" placeholder="Comments "></textarea>



                        </div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Details;
