import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { Link } from 'react-router-dom';
import './App.css';

const Form = () => {
	const [userInfo, setUserInfo] = useState({ userName: '', password: '' });
	const [isSignIn, setIsSignIn] = useState(false);

	const handleChange = (e) => {
		e.preventDefault();
		setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(userInfo);
	};

	const toggleSign = () => {
		setIsSignIn(!isSignIn);
	};

	const handleChild = (e) => {
		e.preventDefault();
		console.log('Child');
		e.stopPropagation();
	};
	return (
		<>
			<Link to="/">Go to Chall</Link>

			{isSignIn ? (
				<SignIn
					userInfo={userInfo}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					toggleSign={toggleSign}
				/>
			) : (
				<SignUp
					userInfo={userInfo}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					toggleSign={toggleSign}
				/>
			)}
			<div onClick={() => console.log('Grandparent')}>
				<div onClickCapture={() => console.log('Parent')}>
					<div onClickCapture={handleChild}></div>
				</div>
			</div>
		</>
	);
};

export default Form;
