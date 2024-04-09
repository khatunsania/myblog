import React from "react";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {
	const [blog, setBlog] = useState({});
	const params = useParams();
	async function getBlog() {
		const { data } = await axios.get(
			`http://localhost:3000/article/${params.id}`
		);
		setBlog(data);
		console.log(data);
	}
	useEffect(function () {
		getBlog();
	}, []);

	return (
		<>
			<div>
				<Navbar/>
				<div className="w-[70%] m-auto mt-20">
					<ul className="w-[35%] m-auto flex">
						<li className="mr-5">by {blog?.authorName} </li>
						<li className="mr-5">{blog?.createdAt}</li>
						<li className="mr-5">3 min read</li>
					</ul>
					<div className="w-[70%] m-auto">
						<p className="text-4xl font-semibold mt-2 py-3 w-[100%]">
							{blog?.title}
						</p>
					</div>

					<div className="w-[15%] m-auto">
						<p className="text-center bg-[#edebf5] py-[5px] lg:px-1 md:px-8 px-3 rounded-md mt-3 text-[#606587] mr-3 lg:text-lg md:text-[15px] sm:text-[12px] text-[10px] cursor-pointer hover:text-[#ffffff] hover:bg-[#250c83] mb-3 ">
							{blog?.tags}
						</p>
					</div>
					<div className="w-[100%]">
						<img
							className="w-[100%] my-7 rounded-lg"
							src={blog?.image}
							alt=""
						/>
						<div className="w-[90%] m-auto">
							<p className="py-3 text-[#5c5d5d] text-[16px] ">
								{" "}
								{blog?.description}
							</p>
							<p className="text-2xl font-semibold">
								Create beautiful designs that will help convert more customers
							</p>
							<p className="py-3 text-base text-[#5c5d5d]">
								passages of Lorem Ipsum available, but the majority have
								suffered alteration in some form, by injected humour, or
								randomised words which don’t look even slightly believable. If
								you are going to use a passage of Lorem Ipsum, you need to be
								sure there isn’t anything embarrassing hidden in the middle of
								text.
							</p>
							<ul className="py-3 text-[#5c5d5d] text-base">
								<li>
									you need to be sure there isn’t anything embarrassing hidden
									in the middle of text. All the Lorem Ipsum generators on the
									Internet tend to repeat predefined chunks as necessary
								</li>
								<li className="py-3 text-[#5c5d5d] text-base">
									you need to be sure there isn’t anything embarrassing hidden
									in the middle of text. All the Lorem Ipsum
								</li>
								<li className="text-[#5c5d5d] text-base">
									embarrassing hidden in the middle of text. All the Lorem Ipsum
									generators on the Internet tend to repeat predefined
								</li>
								<li className="text-[#5c5d5d] py-3 text-base">
									you need to be sure there isn’t anything embarrassing hidden
									in the middle of text. All the Lorem Ipsum generators on the
									Internet tend to repeat predefined chunks as necessary
								</li>
							</ul>
							<div className="w-[100%]">
								<ul className="border-y border-[5c5d5d] flex justify-between w-[100%] py-5">
									<li className="text-xl font-semibold">Share this article:</li>
									<li className="flex ">
										<p className="mr-3 px-4 py-3 bg-[#f4f4f4] rounded-md text-[#333333] hover:bg-[#5137f0] hover:text-[#fff] cursor-pointer ">
											<i class="fa-brands fa-facebook-f"></i>
										</p>
										<p className="mr-3 px-4 py-3 bg-[#f4f4f4] rounded-md text-[#333333] hover:bg-[#5137f0] hover:text-[#fff] cursor-pointer ">
											<i class="fa-brands fa-whatsapp"></i>
										</p>
										<p className="mr-3 px-4 py-3 bg-[#f4f4f4] rounded-md text-[#333333] hover:bg-[#5137f0] hover:text-[#fff] cursor-pointer ">
											<i class="fa-brands fa-twitter"></i>
										</p>
										<p className="mr-3 px-4 py-3 bg-[#f4f4f4] rounded-md text-[#333333] hover:bg-[#5137f0] hover:text-[#fff] cursor-pointer ">
											<i class="fa-brands fa-linkedin"></i>
										</p>
									</li>
								</ul>
							</div>

							<textarea
								className="border border-[#c2c6cc] w-[100%] py-7 rounded-md pl-4 my-5"
								placeholder="Comments "
							></textarea>

							<p className="w-[130px] px-4 py-3 bg-[#5137f0] mb-4 text-center text-[#fff] rounded-lg">
								{" "}
								submit{" "}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Details;
