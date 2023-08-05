import React from "react";
import Typewriter from "typewriter-effect";
import "./Header.css";

const Header = () => {
	return (
		<>
			<h1 className='title'>PROFILER</h1>
			<p className='description'>
				Check username availability on{" "}
				<span className='description-span'>
					<Typewriter
						options={{ loop: true, delay: 100, deleteSpeed: "natural" }}
						onInit={(typewriter) => {
							typewriter
								.typeString("Instagram")
								.pauseFor(1000)
								.deleteAll()
								.typeString("Fueler")
								.pauseFor(1000)
								.deleteAll()
								.typeString("Github")
								.pauseFor(1000)
								.start();
						}}
					/>
				</span>
			</p>
		</>
	);
};

export default Header;
