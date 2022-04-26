import React from 'react';

const Arrays = () => {
	const hel = [
		{ num: 1, name: 'aki' },
		{ num: 2, name: 'cuni' },
	];
	console.log(hel.some((el) => el.name === 'akki'));
	return <div>Arrays</div>;
};

export default Arrays;
