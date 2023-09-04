import { useState } from "react";
import "./Layout.css";

const Layout = () => {
	//useState for className
	const [className, setClassName] = useState({ classname: "dd" });
	return (
		<>
			<section className='main-section'>
				<div className='main-section-child'>
					<div id='Instagram' className='company'>
						Instagram
					</div>
					<div id='Fueler' className='company '>
						Fueler
					</div>
					<div id='Behance' className='company'>
						Behance
					</div>
					<div id='Buy' className='company'>
						Buy me a Coffee
					</div>
				</div>
				<div className='main-section-child'>
					<div id='Github' className='company'>
						Github
					</div>
					<div id='Calendly' className='company'>
						Calendly
					</div>
					<div id='Pinterest' className='company'>
						Pinterest
					</div>
					<div id='Quora' className='company'>
						Quora
					</div>
				</div>
			</section>
		</>
	);
};

// document.getElementById("dd").classList.add(className);
export default Layout;
