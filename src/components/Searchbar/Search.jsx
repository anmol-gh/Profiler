import "./Search.css";
import { useState } from "react";
import axios from "axios";

//to show when results are loading
const searching = (
	<div>
		<p className='paragraph'> Searching </p>
	</div>
);

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
			const github = document.getElementById("Github");
			try {
				const githubAPI = fetch(`https://api.github.com/users/${username}`);
				const githubStatus = (await githubAPI).status;
				if (githubStatus === 200) {
					github.className = "company unavailable";
				} else if (githubStatus === 404) {
					github.className = "company available";
				} else {
					github.className = "company error";
				}
			} catch (error) {
				github.className = "company error";
			}
		}
		Github();

		//For Instagram
		async function Instagram() {
			const instagram = document.getElementById("Instagram");
			try {
				const response = await axios.post(
					"ec2-13-232-212-189.ap-south-1.compute.amazonaws.com:6431/insta",
					{
						username,
					}
				);
				if (response.data === "Unavailable") {
					instagram.className = "company unavailable";
				} else if (response.data === "Available") {
					instagram.className = "company available";
				} else {
					instagram.className = "company error";
				}
			} catch (error) {
				instagram.className = "company error";
			}
		}
		Instagram();

		//For Fueler
		async function Fueler() {
			const fueler = document.getElementById("Fueler");
			try {
				const response = await axios.post(
					"ec2-13-232-212-189.ap-south-1.compute.amazonaws.com:6431/fueler",
					{
						username,
					}
				);
				const fuelerStatus = response.status;
				if (fuelerStatus === 200) {
					fueler.className = "company unavailable";
				} else if (fuelerStatus === 404) {
					fueler.className = "company available";
				} else {
					fueler.className = "company error";
				}
			} catch (error) {
				if (error.message === "Request failed with status code 404") {
					fueler.className = "company available";
				} else {
					fueler.className = "company error";
				}
			}
		}
		Fueler();

		async function Calendly() {
			const calendly = document.getElementById("Calendly");
			try {
				const response = await axios.post(
					"ec2-13-232-212-189.ap-south-1.compute.amazonaws.com:6431/calendly",
					{
						username,
					}
				);
				if (response.status === 200) {
					calendly.className = "company unavailable";
				} else if (response.status === 404) {
					calendly.className = "company available";
				} else {
					calendly.className = "company error";
				}
			} catch (error) {
				if (error.message === "Request failed with status code 404") {
					calendly.className = "company available";
				} else {
					calendly.className = "company error";
				}
			}
		}
		Calendly();

		async function Behance() {
			const behance = document.getElementById("Behance");
			try {
				const response = await axios.post(
					"ec2-13-232-212-189.ap-south-1.compute.amazonaws.com:6431/behance",
					{
						username,
					}
				);
				const behanceStatus = response.status;
				if (behanceStatus === 200) {
					behance.className = "company unavailable";
				} else if (behanceStatus === 404) {
					behance.className = "company available";
				} else {
					behance.className = "company error";
				}
			} catch (error) {
				if (error.message === "Request failed with status code 404") {
					behance.className = "company available";
				} else {
					behance.className = "company error";
				}
			}
		}
		Behance();

		async function Buy() {
			const buy = document.getElementById("Buy");
			try {
				const response = await axios.post(
					"ec2-13-232-212-189.ap-south-1.compute.amazonaws.com:6431/buy",
					{
						username,
					}
				);
				const buyStatus = response.status;
				if (buyStatus === 200) {
					buy.className = "company unavailable";
				} else if (buyStatus === 301) {
					buy.className = "company available";
				} else {
					buy.className = "company error";
				}
			} catch (error) {
				if (error.message === "Request failed with status code 404") {
					buy.className = "company available";
				} else {
					buy.className = "company error";
				}
			}
		}
		Buy();
		async function Dribbble() {
			const dribbble = document.getElementById("Dribbble");
			try {
				const response = await axios.post(
					"ec2-13-232-212-189.ap-south-1.compute.amazonaws.com:6431/dribbble",
					{
						username,
					}
				);
				const buyStatus = response.status;
				if (buyStatus === 200) {
					dribbble.className = "company unavailable";
				} else if (buyStatus === 301) {
					dribbble.className = "company available";
				} else {
					dribbble.className = "company error";
				}
			} catch (error) {
				if (error.message === "Request failed with status code 404") {
					dribbble.className = "company available";
				} else {
					dribbble.className = "company error";
				}
			}
		}
		Dribbble();
		async function Sanchar() {
			const sanchar = document.getElementById("Sanchar");

			try {
				const response = await axios.post(
					"ec2-13-232-212-189.ap-south-1.compute.amazonaws.com:6431/sanchar",
					{
						username,
					}
				);
				console.log(response.data, "sanchar");
				if (response.data === "Unavailable") {
					sanchar.className = "company unavailable";
				} else if (response.data === "Available") {
					sanchar.className = "company available";
				} else {
					sanchar.className = "company error";
				}
			} catch (error) {
				console.log(error);
			}
		}
		Sanchar();
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
