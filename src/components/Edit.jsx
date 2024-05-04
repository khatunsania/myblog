import React from "react";
import SideBar from "./SideBar";
import Anav from "./Anav";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Edit = () => {
	const [blog, setBlog] = useState({
		title: "",
		image: "",
		description: "",
		authorName: "",
		tags: "",
		createdAt: "",
	});
	const params = useParams();
	const navigate = useNavigate();

	async function getBlog() {
		const { data } = await axios.get(`http://localhost:3000/article/${params.id}`)
		
		console.log(data);
		setBlog(data);
	}
	useEffect(function () {
		getBlog();
	}, []);

	function handlechange(e) {
		setBlog({
			...blog,
			[e.target.name]: e.target.value,
		});
	}
	async function addblog() {
		try {
			await axios.put(`http://localhost:3000/article/${params.id}`,blog);
			navigate("/admin")
		} catch (error) {
			console.log(error);
		}
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
								<p className="pl-5 pb-5 font-semibold">Edit post</p>

								<div className="mb-2 w-[95%] m-auto ">
									<input
										className="w-[95%] m-auto px-3 py-2 border border-[#d1dfdb] rounded-lg mb-4 bg-[#f9fafb]"
										type="text"
										placeholder="add Title"
										name="title"
										value={blog?.title}
										onChange={handlechange}
									/>
								</div>
								<div className="mb-2 w-[95%] m-auto">
									<input
										className="w-[95%] m-auto px-3 py-2 border border-[#d1dfdb] rounded-lg mb-4 bg-[#f9fafb]"
										type="text"
										placeholder="add image"
										name="image"
										value={blog?.image}
										onChange={handlechange}
										
									/>
								</div>
								<div className="mb-2 w-[95%] m-auto">
									<input
										className="w-[95%] m-auto px-3 py-2 border border-[#d1dfdb] rounded-lg mb-4 bg-[#f9fafb] "
										type="text"
										name="description"
										placeholder="add description"
										value={blog?.description}
										onChange={handlechange}
									/>
								</div>
								<div className="mb-2 w-[95%] m-auto">
									<input
										className="w-[95%] m-auto px-3 py-2 border border-[#d1dfdb] rounded-lg mb-4 bg-[#f9fafb]"
										type="text"
										placeholder="add autorname"
										name="authorName"
										value={blog?.authorName}
										onChange={handlechange}
									/>
								</div>
								<div className="mb-2 w-[95%] m-auto">
									<input
										className="w-[95%] m-auto px-3 py-2 border border-[#d1dfdb] rounded-lg mb-4 bg-[#f9fafb]"
										type="text"
										placeholder="add tags"
										name="tags"
										value={blog?.tags}
										onChange={handlechange}
									/>
								</div>
								<div className="mb-2 w-[95%] m-auto">
									<input
										className="w-[95%] m-auto px-3 py-2 border border-[#d1dfdb] rounded-lg mb-4 bg-[#f9fafb]"
										type="text"
										placeholder="add CreatedAt"
										name="createdAt"
										value={blog?.createdAt}
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

export default Edit;
