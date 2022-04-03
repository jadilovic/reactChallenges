import React from 'react';

const people = [
	{
		name: 'jasmin',
		age: 33,
	},
	{
		name: 'aki',
		age: 31,
	},
	{
		name: 'mark',
		age: 23,
	},
	{
		name: 'steve',
		age: 13,
	},
	{
		name: 'mob',
		age: 32,
	},
];

const arr = [[1], [2, 3], [4]];
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const Sorting = () => {
	const sortedList = people.sort((a, b) => a.age - b.age);

	const flatten = (arr) => {
		return arr.reduce((flat, toFlatten) => {
			return flat.concat(
				Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
			);
		}, []);
	};

	const shuffle = (numArr) => {
		let currentIndex = numArr.length;
		let tempValue, randomIndex;

		while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			tempValue = numArr[currentIndex];
			numArr[currentIndex] = numArr[randomIndex];
			numArr[randomIndex] = tempValue;
		}
		return numArr;
	};

	const middle = (str) => {
		if (str.length < 2) {
			return 0;
		}
		const strArr = str.split('');
		let middle = Math.floor(strArr.length / 2);
		for (let i = 0, j = strArr.length - 1; i < middle; i++, j--) {
			if (strArr[i] !== strArr[j]) {
				middle = -1;
				break;
			}
		}
		return middle;
	};

	console.log(middle('rt'));
	// console.log(flatten(arr));
	// console.log(shuffle(numArr));
	return (
		<>
			<div>Sorting</div>
			<h3>Start</h3>
			<ul>
				{sortedList.map((person) => {
					return <li key={person.name}>{`${person.name} ${person.age}`}</li>;
				})}
			</ul>
		</>
	);
};

export default Sorting;
