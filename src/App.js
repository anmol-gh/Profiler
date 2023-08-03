import React from "react";
import Search from "./components/Search";
import Layout from "./components/Layout";
import "./App.css";

const App = () => {
	return (
		<div>
			<h1 className='title'>Profiler</h1>
			<p className='description'>
				Check username availability on <br></br>{" "}
				<span className='description-span'>10+</span> platforms in seconds.
			</p>
			<Search />
			<Layout />
		</div>
	);
};
export default App;
