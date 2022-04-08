import React from 'react';

const Search = ({ search, setSearch }) => {
	return (
		<>
			<div>Search</div>
			<input
				autoFocus
				value={search}
				type="text"
				placeholder="Enter search term..."
				onChange={(e) => setSearch(e.target.value)}
			/>
		</>
	);
};

export default Search;
