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
		console.log("clicked");
		document.getElementsByClassName("company")[0].className = "company";
		try {
			const response = await axios.post("http://localhost:8800/insta", {
				username,
			});

			console.log(response.data);
			if (response.data == "Unavailable") {
				console.log(document.getElementsByClassName("company")[0]);
				document.getElementsByClassName("company")[0].className =
					"company unavailable";
			} else if (response.data == "Available") {
				document.getElementsByClassName("company")[0].className =
					"company available";
			} else {
				document.getElementsByClassName("company")[0].className =
					"company error";
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
