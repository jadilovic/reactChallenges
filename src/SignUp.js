import React from 'react';

const SignUp = ({ userInfo, handleChange, handleSubmit, toggleSign }) => {
	return (
		<>
			<h3>SignUp</h3>
			<form onSubmit={handleSubmit}>
				<label htmlFor="userName">Username</label>
				<input
					type="text"
					value={userInfo.userName}
					name="userName"
					onChange={handleChange}
				/>
				<label htmlFor="password">Password</label>
				<input
					type="text"
					value={userInfo.password}
					name="password"
					onChange={handleChange}
				/>
				<button type="submit">Submit</button>
			</form>
			<p onClick={toggleSign}>Have account, go to sign in</p>
		</>
	);
};

export default SignUp;
