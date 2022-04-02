import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
	const [api, setApi] = useState({});
	const [text, setText] = useState('');
	const [message, setMessage] = useState('');
	const [value, setValue] = useState('');
	const names = [
		'Aki',
		'Cuni',
		'Ali',
		'Adian',
		'Alina',
		'Ada',
		'Cuna',
		'Bob',
		'Boby',
		'Box',
	];
	const [list, setList] = useState('');

	const handleValue = (e) => {
		setValue(e.target.value);
		const suggestion = [];
		names.forEach((name) => {
			if (
				name.substring(0, e.target.value.length).toUpperCase() ===
				e.target.value.toUpperCase()
			) {
				suggestion.push(name);
				setList(
					suggestion.map((item, index) => {
						return (
							<p onClick={(e) => setValue(item)} key={index}>
								{item}
							</p>
						);
					})
				);
			}
		});
		if (e.target.value.length === 0) {
			setList('');
		}
	};

	const getData = async (url) => {
		const data = await fetch(url, {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
				Application: 'application/json',
			},
		}).then((res) => res.json());
		setApi(data);
	};

	const handleChange = (e) => {
		setText(e.target.value);
	};

	const checkPalindrome = () => {
		const reverseText = text.split('').reverse().join('');
		if (text === reverseText) {
			setMessage('Is palindrome');
		} else {
			setMessage('Not palindrome');
		}
	};

	useEffect(() => {
		getData('/api');
	}, []);

	return (
		<div className="App">
			<input type="text" value={text} onChange={handleChange} />
			<button onClick={checkPalindrome}>Check Palindrom</button>
			<h4>{message}</h4>
			<button onClick={() => getData('/quit')}>Get quit</button>
			<div>{api.response}</div>
			<h3>Autocomplete</h3>
			<input type="text" value={value} onChange={handleValue} />
			<div>{list}</div>
		</div>
	);
}

export default App;
