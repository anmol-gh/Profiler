import React from "react";
import Header from "./components/Header/Header";
import Search from "./components/Searchbar/Search";
import Layout from "./components/Layout/Layout";
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
