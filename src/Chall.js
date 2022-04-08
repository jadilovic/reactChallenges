import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Chall = () => {
	const [data, setData] = useState({
		id: '1t4',
		title: 'How to pass state in react-router-dom',
		tag: ['reactjs', 'react-router-dom'],
	}); // first example
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

	const postText = async (url, text) => {
		const data = await fetch(url, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				Application: 'application/json',
			},
			body: JSON.stringify(text),
		}).then((res) => res.json());
		console.log(data);
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
		const postInput = { text };

		postText('/text', postInput);
	};

	const getUser = async (url, id) => {
		const user = await fetch(url, {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
				Application: 'application/json',
			},
		}).then((res) => res.json());
		// const user = await axios.get(url, { params: { id } });
		console.log(user);
	};

	useEffect(() => {
		getData('/api');
		// getUser('https://jsonplaceholder.typicode.com/users', '1');
		getUser('https://jsonplaceholder.typicode.com/users/1');
	}, []);

	console.log(data);

	return (
		<div className="App">
			<Link to="/form">Go to Form</Link>
			<br />
			<Link to="/sort">Go to Sorting</Link>
			<br />
			<Link to="/login">Go to LoginForm</Link>
			<br />
			<Link to="/login" state={{ data: data }}>
				Go to LoginForm with state
			</Link>
			<br />
			<Link to="/count">Go to Counter</Link>
			<br />
			<Link to="/beer">Go to Beer</Link>
			<br />
			<Link to="/profile">Profile</Link>
			<br />
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
};

export default Chall;
