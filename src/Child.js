import { Button } from '@mui/material';
import React, { memo } from 'react';

const Child = memo(({ firstName, lastName }) => {
	console.log('rendering');
	console.log(firstName);
	return (
		<>
			<h1>{lastName}</h1>
			{/* <h2>{firstName()}</h2>
			<Button onClick={() => firstName()}>Click function</Button> */}
		</>
	);
});

export default Child;
