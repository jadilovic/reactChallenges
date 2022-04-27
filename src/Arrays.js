import React from 'react';

const Arrays = () => {
	const hel = [
		{ num: 1, name: 'aki', price: 44 },
		{ num: 2, name: 'cuni', price: 4 },
		{ num: 3, name: 'aki', price: 33 },
		{ num: 4, name: 'cuni', price: 3 },
		{ num: 5, name: 'aki', price: 55 },
		{ num: 6, name: 'cuni', price: 5 },
	];

	const arrHel = hel.map((el) => {
		return { ...el, price: el.price + 1 };
	});

	const arrHel2 = hel.map((el) => {
		return ++el.price;
	});

	const sum = arrHel.reduce((acc, curr) => {
		acc += curr.price;
		return acc;
	}, 0);
	console.log(arrHel2);
	console.log(hel.includes());

	console.log(sum);
	console.log(hel.some((el) => el.name === 'akki'));

	console.log(hel);
	console.log(arrHel);
	console.log(sum);
	console.log(null == {});

	// const pp = new Promise((res, rej) => {
	// 	setTimeout(() => {
	// 		console.log('responded');
	// 	}, 1);
	// 	if (true) {
	// 		res();
	// 	}
	// }).then((res) => );

	return <div>Arrays</div>;
};

export default Arrays;
