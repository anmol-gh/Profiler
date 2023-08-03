const click = () => {console.log("I have been clicked") };

const Search = () => {
	return (
		<div className="search-panel">
			<input type='text' placeholder='Username to search' className="username"/>
			<button className='btn-availability' onClick={click}>Check Availability</button>
		</div>
	);
};

export default Search;
