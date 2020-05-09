import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
	return (
		<div clasname="pa2">
			<input 
				className="tc pa3 ba b--green bg-lightest-blue" 
				type="search" 
				placeholder="Search"
				onChange={searchChange}
			/>
		</div>
		
	);
}

export default SearchBox;