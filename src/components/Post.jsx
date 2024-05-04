import React from "react";
import SideBar from "./SideBar";
import Anav from "./Anav";
import AdminCard from "./AdminCard";
import { useState, useEffect } from "react";
import axios from "axios";
const Post = () => {
	const [blog, setBlog] = useState([]);
	async function getBlog() {
		const { data } = await axios.get("http://localhost:3000/article");
		setBlog(data);
		console.log(data);
	}
	useEffect(function () {
		getBlog();
	}, []);

	async function delpost(id) {
		await axios.delete(`http://localhost:3000/article/${id}`, blog);
		alert("post deleted");
		setBlog(blog.filter((item) => item?.id !== id));
	};

	return (
		<>
			<div className="flex ">
				<SideBar />
				<div className="flex-1">
					<Anav />
					<div className="bg-[#f1f5f9] w-[100%]">
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
