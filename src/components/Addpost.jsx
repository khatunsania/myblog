import React from "react";
import SideBar from "./SideBar";
import Anav from "./Anav";
import { useState } from "react";
import { useEffect } from "react";
import  axios  from "axios";
import { useNavigate } from "react-router-dom";
const Addpost = () => {
	const [blog, setBlog] = useState({
		title: "",
		image: "",
		descrption: "",
		authorName: "",
		tags: "",
		createdAt: "",
	});
	const navigate = useNavigate();

	function handlechange(e){
		setBlog(
			{
				...blog,
				[e.target.name]: e.target.value,
			}
		)
	}

	async function addblog() {
		const { data } = await axios.post("http://localhost:3000/article",blog);
		navigate("/admin")
		console.log(data);
		setBlog(data);
	}

	

	return (
		<>
			<div className="flex">
				<SideBar />
				<div className="flex-1 ">
					<Anav />
					<div className="bg-[#e8eaed] h-[100vh] w-[100%]">
						<div className="w-[70%] m-auto pt-24 ">
							<div className="bg-[#fff] py-7 w-[90%] m-auto shadow rounded-lg">
								<p className="pl-5 pb-5 font-semibold">Add new post</p>

								<div className="mb-2 w-[95%] m-auto ">
									<input
										className="w-[95%] m-auto px-3 py-2 border border-[#d1dfdb] rounded-lg mb-4 bg-[#f9fafb]"
										type="text"
										placeholder="add Title"
										name="title"
										onChange={handlechange}
									/>
								</div>
								<div className="mb-2 w-[95%] m-auto">
									<input
										className="w-[95%] m-auto px-3 py-2 border border-[#d1dfdb] rounded-lg mb-4 bg-[#f9fafb]"
										type="text"
										placeholder="add image"
										name="image"
										onChange={handlechange}
									/>
								</div>
								<div className="mb-2 w-[95%] m-auto">
									<input
										className="w-[95%] m-auto px-3 py-2 border border-[#d1dfdb] rounded-lg mb-4 bg-[#f9fafb] "
										type="text"
										placeholder="add description"
										name="description"
										onChange={handlechange}
									/>
								</div>
								<div className="mb-2 w-[95%] m-auto">
									<input
										className="w-[95%] m-auto px-3 py-2 border border-[#d1dfdb] rounded-lg mb-4 bg-[#f9fafb]"
										type="text"
										placeholder="add autorname"
										name="authorName"
										onChange={handlechange}
									/>
								</div>
								<div className="mb-2 w-[95%] m-auto">
									<input
										className="w-[95%] m-auto px-3 py-2 border border-[#d1dfdb] rounded-lg mb-4 bg-[#f9fafb]"
										type="text"
										placeholder="add tags"
										name="tags"
										onChange={handlechange}
									/>
								</div>
								<div className="mb-2 w-[95%] m-auto">
									<input
										className="w-[95%] m-auto px-3 py-2 border border-[#d1dfdb] rounded-lg mb-4 bg-[#f9fafb]"
										type="text"
										placeholder="add CreatedAt"
										name="createdAt"
										onChange={handlechange}
									/>
								</div>
								<div className="mb-2 w-[95%] m-auto">
									<button onClick={addblog} className="w-[95%] m-auto px-3 py-2 border border-[#d1dfdb] rounded-lg mb-4 bg-[#f9fafb]">
										submit
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Addpost;
