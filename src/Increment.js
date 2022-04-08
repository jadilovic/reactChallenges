import React, { useContext } from 'react';
import CountContext from './CountContext';

const Increment = () => {
	const context = useContext(CountContext);
	const { counter, setCounter } = context;

	return (
		<>
			<div>Increment</div>
			<button onClick={() => setCounter(counter + 1)}>Click</button>
		</>
	);
};

export default Increment;
