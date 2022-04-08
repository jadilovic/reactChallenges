import './App.css';
import React from 'react';
import Chall from './Chall';
import Form from './Form';
import Sorting from './Sorting';
import LoginForm from './LoginForm';
import { Routes, Route } from 'react-router-dom';
import Beer from './Beer';
import Count from './Count';
import Profile from './Profile';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Chall />} />
				<Route path="/form" element={<Form />} />
				<Route path="/sort" element={<Sorting />} />
				<Route path="/login" element={<LoginForm />} />
				<Route path="/beer" element={<Beer />} />
				<Route path="/count" element={<Count />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</>
	);
}

export default App;
