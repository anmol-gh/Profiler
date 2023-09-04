import "./Search.css";
import { useState } from "react";
import axios from "axios";

const Search = () => {
	// useState for Input Field
	const [username, setUsername] = useState({ username: "" });

	// useState for Button
	const [update, setUpdate] = useState(username);

	// Function to handle Input Field
	const handleChange = (event) => {
		setUsername(event.target.value);
	};

	// Function to handle Button Click
	const handleClick = async (event) => {
		setUpdate(username);

		// the below snippet resets the appearance of the labels when button is clicked
		const unavailablePlatforms = document.getElementsByClassName("unavailable");
		const availablePlatforms = document.getElementsByClassName("available");
		const errorPlatforms = document.getElementsByClassName("error");
		// console.log(unavailablePlatforms);
		// console.log(availablePlatforms);

		for (let platform = 0; platform < unavailablePlatforms.length; platform++) {
			unavailablePlatforms[platform].className = "company";
		}

		for (let platform = 0; platform < availablePlatforms.length; platform++) {
			availablePlatforms[platform].className = "company";
		}
		for (let platform = 0; platform < errorPlatforms.length; platform++) {
			errorPlatforms[platform].className = "company";
		}

		/// API Requests to platforms that provide API

		//For Github	
		async function Github() {
			try {
				const x = await axios
					.get(`https://api.github.com/users/${username}`)
					.then((res) => {
						if (res.status == 200) {
							document.getElementById("Github").className =
								"company unavailable";
						}
						return res;
					})
					.catch((err) => {
						if (err.request.status == 404) {
							document.getElementById("Github").className = "company available";
						}
					});
			} catch (error) {
				return error;
			}
		}
		Github();
	

		async function Fueler() {
			///anmolssssss

			https: try {
				const x = await axios
					.get(`https://fueler.io/${username}`)
					.then((res) => {
						console.log(res, res.status)
						if (res.status == 200) {
							document.getElementById("Fueler").className =
								"company unavailable";
						}
						return res;
					})
					.catch((err) => {
						if (err.request.status == 404) {
							document.getElementById("Fueler").className = "company available";
						}
					});
			} catch (error) {
				return error;
			}
		}
		Fueler();
		//For Fueler

		// axios
		// 	.get(`https://fueler.io/${username}`)
		// 	.then(
		// 		(res) => console.log(res.data, "found"),
		// 		(document.getElementById("Fueler").className = "company available")
		// 	)
		// 	.catch(
		// 		(err) => console.log(err, "not found fueler"),
		// 		(document.getElementById("Fueler").className = "company available")
		// 	);

		// below snippet send request to the backend
		try {
			const response = await axios.post("http://localhost:8800/insta", {
				username,
			});

			console.log(response.data);
			if (response.data == "Unavailable") {
				console.log(document.getElementById("Instagram"));
				document.getElementById("Instagram").className = "company unavailable";
			} else if (response.data == "Available") {
				document.getElementById("Instagram").className = "company available";
			} else {
				document.getElementById("Instagram").className = "company error";
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='search-panel'>
			<input
				type='text'
				placeholder='Username to search'
				className='username'
				username={username}
				onChange={handleChange}
				id='input'
			/>
			<button className='btn-availability' onClick={handleClick}>
				Check Availability
			</button>
		</div>
	);
};

export default Search;
