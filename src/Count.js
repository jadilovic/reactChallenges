import React, { useState, useEffect } from 'react';
import CountContext from './CountContext';
import Increment from './Increment';
import axios from 'axios';

const Count = () => {
	const [counter, setCounter] = useState(0);
	const [item, setItem] = useState('');
	const [items, setItems] = useState([]);
	const [posts, setPosts] = useState([]);

	const getPosts = async () => {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/posts'
		);
		console.log(response.data);
	};

	useEffect(() => {
		getPosts();
	}, []);

	const handleChange = (e) => {
		e.preventDefault();
		setItem(e.target.value);
	};

	const addItem = () => {
		items.push(item);
		setItems([...items]);
		setItem('');
	};

	const handleDelete = (e) => {
		console.log(e.target.id);
		e.preventDefault();
		const newList = items.filter((item) => item !== e.target.id);
		console.log(newList);
		setItems([...newList]);
	};

	return (
		<>
			<CountContext.Provider value={{ counter, setCounter }}>
				<div>Count</div>
				<h4>{counter}</h4>
				<Increment />
				<h1>Add Item</h1>
				<input autoFocus type="text" value={item} onChange={handleChange} />
				<button onClick={addItem}>Submit</button>
				<h2>Items List</h2>
				<ul>
					{items.map((item, index) => {
						return (
							<li key={index} onClick={handleDelete} id={item}>
								{item}
							</li>
						);
					})}
				</ul>
			</CountContext.Provider>
		</>
	);
};

export default Count;
