import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Layout from "./components/Layout";
import "./App.css";

const App = () => {
	return (
		<div>
			<Header/>
			<Search />
			<Layout />
		</div>
	);
};
export default App;
