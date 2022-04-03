import React, { useState, useEffect } from 'react';
import { login } from './utils';
import './styles.css';

// ================ LOGIN FORM ====================
//
// Guidelines:
// * You have an incomplete login form.
// * You are not allowed to add any additional HTML elements.
// * You are not allowed to use refs.
//
// Tasks:
//  * The login button should trigger the login() action imported above and pass required data to it.
//  * Disable the Login button if email is blank OR if password is under 6 letters
//  * Disable the Login button while login action is being performed
//  * Show an error message from the login() if login fails. The error should be cleared every time user
//    re-attempts to log in.
//  * Show an alert box (native Javascript alert) if login succeeds. Investigate the login function to find
//    out how to log in successfully.

export default function LoginForm() {
	const [userInput, setUserInput] = useState({ email: '', password: '' });
	const [disableButton, setDisableButton] = useState(true);
	const [errorMsg, setErrorMsg] = useState('');

	const handleChange = (e) => {
		e.preventDefault();
		setErrorMsg('');
		setUserInput({ ...userInput, [e.target.id]: e.target.value });
	};

	const handleUserLogin = async () => {
		console.log(userInput.email, userInput.password);
		try {
			await login({
				email: userInput.email,
				password: userInput.password,
			});
			alert('Successfull Login');
		} catch (error) {
			console.log(error.message);
			setErrorMsg(error.message);
		}
		setUserInput({ email: '', password: '' });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setDisableButton(true);
		handleUserLogin();
	};

	useEffect(() => {
		if (userInput.email.length < 1 || userInput.password.length < 6) {
			setDisableButton(true);
		} else {
			setDisableButton(false);
		}
	}, [userInput]);

	return (
		<div className="wrapper">
			<div className="row">
				<label htmlFor={'email'}>Email</label>
				<input
					id={'email'}
					// type={'email'}
					value={userInput.email}
					onChange={handleChange}
				/>
			</div>
			<div className="row">
				<label htmlFor={'password'}>Password</label>
				<input
					id={'password'}
					// type={'password'}
					value={userInput.password}
					onChange={handleChange}
				/>
			</div>

			{/* Place login error inside this div. Show the div ONLY if there are login errors. */}
			<div className="errorMessage">{errorMsg}</div>

			<div className="button">
				<button
					disabled={disableButton}
					onClick={disableButton ? null : handleSubmit}
				>
					Login
				</button>
			</div>
		</div>
	);
}
