import React from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	async function login() {
		if (email == "" || password == "") {
			console.log("please given input");
		} else {
			const { data } = await axios.get(
				`http://localhost:3000/user?email=${email}&password=${password}`
			);
			console.log(email, password);
			if (data.length > 0) {
				localStorage.setItem("user", JSON.stringify(data));
				navigate("/admin");
			} else {
				alert("your login details are wrong");
			}

			console.log(data);
			setEmail("");
			setPassword("");
		}
	}
	return (
		<>
			<Navbar />
			<div className="w-full h-[100vh] bg-[#f9fafb] pt-32">
				<div className="w-[30%] m-auto bg-white shadow dark:border dark:bg-gray-800 dark:border-gray-700 py-10 ">
					<div className="w-[90%] m-auto">
						<p className="text-xl font-bold leading-tight pb-7">
							sign in your account
						</p>

						<div className="mb-2 w-[100%] ">
							<input
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="w-full bg-gray-50 border-gray-300 text-gray-900 rounded-lg px-2 py-2 border border-[#9ca3af]"
								type="text"
								placeholder="Enter Your Email"
							/>
						</div>
						<div className="pt-5">
							<input
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="w-full bg-gray-50 border-gray-300 text-gray-900 rounded-lg px-2 py-2 border border-[#9ca3af]"
								type="password"
								placeholder="Enter Your password"
							/>
						</div>
						<div className="pt-7">
							<button
								onClick={login}
								className="border border-[#9ca3af] px-3 py-1 rounded-md text-[#131017] font-semibold"
							>
								Login
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
