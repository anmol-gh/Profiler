import { useState } from "react";
import "./Layout.css";

const Layout = () => {
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
					<div id='Dribbble' className='company'>
						Dribbble
					</div>
					<div id='Quora' className='error company'>
						Quora
						{/* <span className='error tooltiptext'> Currently Unavailable</span> */}
					</div>
				</div>
			</section>
		</>
	);
};


export default Layout;
