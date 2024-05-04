import React from "react";
import SideBar from "./SideBar";
import Anav from "./Anav";
import AdminCard from "./AdminCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Post = () => {
	const [blog, setBlog] = useState([]);
	const navigate = useNavigate();
	async function getBlog() {
		const { data } = await axios.get("http://localhost:3000/article");
		setBlog(data);
		console.log(data);
	}
	useEffect(function () {
		const user = localStorage.getItem("user");
		if (!user) {
			navigate("/");
		}
		
		getBlog();
	}, []);

	async function delpost(id) {
		await axios.delete(`http://localhost:3000/article/${id}`, blog);
		alert("post deleted");
		setBlog(blog.filter((item) => item?.id !== id));
	}

	return (
		<>
			<div className="flex ">
				<SideBar />
				<div className="flex-1">
					<Anav />
					<div className="bg-[#f1f5f9] w-[100%] h-[90vh] overflow-y-scroll">
						<div className="grid grid-cols-2 w-[90%] m-auto pt-10">
							{blog?.map((item, index) => (
								<>
									<AdminCard item={item} delblog={delpost} />
								</>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Post;
