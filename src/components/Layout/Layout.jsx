import "./Layout.css";

const Layout = () => {
	return (
		<>
			<section className='main-section'>
				<div className='main-section-child'>
					<div className='company '> Instagram</div>
					<div className='company '>Fueler</div>
					<div className='company'>Twitter</div>
					<div className='company'>Buy me a Coffee</div>
				</div>
				<div className='main-section-child'>
					<div className='company'>LinkedIn</div>
					<div className='company'>Github</div>
					<div className='company'>Calendly</div>
					<div className='company'>Behance</div>
				</div>
			</section>
		</>
	);
};

export default Layout;
