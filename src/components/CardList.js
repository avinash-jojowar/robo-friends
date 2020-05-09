import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	const cardComponent = robots.map((i, j) => {
		return <Card id={robots[j].id} name={robots[j].name} email={robots[j].email} />
	})
	return (
		<div>
			{ cardComponent }
		</div>	
	);
}

export default CardList;
