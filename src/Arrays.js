import { Button, Typography } from '@mui/material';
import React, { useCallback, useMemo, useState } from 'react';
import Child from './Child';

const Arrays = ({ firstName, lastName }) => {
	const [count, setCount] = useState(0);
	const [newName, setNewName] = useState(firstName);

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
	// console.log(arrHel2);
	// console.log(hel.includes());

	// console.log(sum);
	// console.log(hel.some((el) => el.name === 'akki'));

	// console.log(hel);
	// console.log(arrHel);
	// console.log(sum);
	// console.log(null == {});

	// const pp = new Promise((res, rej) => {
	// 	rej('No ');
	// });

	// pp.then(
	// 	(res) => console.log(res),
	// 	() => console.log('hello')
	// ).finally((done) => console.log(done));

	// fetch('https://reqres.in/api/users', {
	// 	method: 'POST',
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 	},
	// 	body: JSON.stringify({
	// 		name: 'Boby',
	// 	}),
	// })
	// 	.then((response) => {
	// 		if (response.ok) {
	// 			return response.json();
	// 		} else {
	// 			console.log('Error fetching');
	// 		}
	// 	})
	// 	.then((data) => console.log(data));

	const fib = (n) => {
		if (n <= 1) {
			return 1;
		}
		return fib(n - 1) + fib(n - 2);
	};

	console.log(fib(9));

	const oneFun = () => {
		return 1 + 1;
	};

	return (
		<div className="parent">
			<Button variant="contained" onClick={() => setCount(count + 1)}>
				Increase Count
			</Button>
			<Typography variant="h3" align="center">
				{count}
			</Typography>
			<Button onClick={() => setNewName('Boby')}>Set new name</Button>
			<h1>Parent</h1>
			<div className="one">
				{firstName + ' ' + Math.floor(Math.random() * (55 - 10) + 10)}
			</div>
			<div className="two">{lastName + Math.random()}</div>
			<div className="three">Child Three</div>
			<Child
				firstName={useMemo(() => {
					return oneFun();
				}, [])}
				lastName={lastName}
			/>
		</div>
	);
};

export default Arrays;
