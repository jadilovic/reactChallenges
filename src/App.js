import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Chall from './Chall';
import Form from './Form';
import Sorting from './Sorting';
import LoginForm from './LoginForm';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Chall />} />
			<Route path="/form" element={<Form />} />
			<Route path="/sort" element={<Sorting />} />
			<Route path="/login" element={<LoginForm />} />
		</Routes>
	);
}

export default App;
