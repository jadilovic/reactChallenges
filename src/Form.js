import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Form = () => {
	const [userInfo, setUserInfo] = useState({ userName: '', password: '' });
	const [isSignIn, setIsSignIn] = useState(true);

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
	return (
		<>
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
		</>
	);
};

export default Form;
