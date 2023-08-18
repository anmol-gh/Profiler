import { useState } from "react";
import "./Layout.css";

const Layout = () => {
	//useState for className
	const [className, setClassName] = useState({ classname: "dd" });
	return (
		<>
			<section className='main-section'>
				<div className='main-section-child'>
					<div id='dd' className='company'>
						Instagram
					</div>
					<div className='company '>Fueler</div>
					<div className='company'>Twitter</div>
					<div className='company'>Behance</div>
					<div className='company'>Buy me a Coffee</div>
				</div>
				<div className='main-section-child'>
					<div className='company'>LinkedIn</div>
					<div className='company'>Github</div>
					<div className='company'>Calendly</div>
					<div className='company'>Pinterest</div>
					<div className='company'>Quora</div>
				</div>
			</section>
		</>
	);
};

// document.getElementById("dd").classList.add(className);
export default Layout;
