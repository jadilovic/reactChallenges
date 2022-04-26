import React, { useState, useRef, useEffect } from 'react';

const TextInput = () => {
	const [name, setName] = useState('');
	const focusRef = useRef(0);

	const handleClick = (e) => {
		e.preventDefault();
		focusRef.current.focus();
	};

	const handleChange = (e) => {
		e.preventDefault();
		setName(e.target.value);
		focusRef.current = name;
	};

	return (
		<>
			<h3>TextInput</h3>
			<input ref={focusRef} value={name} onChange={(e) => handleChange(e)} />
			<h6>ref : {focusRef.current}</h6>
			<h6>state : {name}</h6>
			<button onClick={handleClick}>focus</button>
		</>
	);
};

export default TextInput;
