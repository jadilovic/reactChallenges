import {
	Button,
	TextField,
	Typography,
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableCell,
	Paper,
	TableRow,
} from '@mui/material';
import React, { useContext, useState } from 'react';
import CountContext from './CountContext';

const Increment = () => {
	const context = useContext(CountContext);
	const { counter, setCounter } = context;
	const [number, setNumber] = useState(0);
	const [head, setHead] = useState([]);
	const [arrMain, setArrMain] = useState([]);

	const createTable = () => {
		for (let i = 1; i < Number(number) + 1; i++) {
			head.push(i);
			const arr = [];
			arr.push(i);
			for (let j = 1; j < Number(number) + 1; j++) {
				arr.push(i * j);
			}
			arrMain.push(arr);
		}
		setArrMain([...arrMain]);
		setHead([...head]);
	};

	return (
		<>
			<div>Increment Form Table</div>
			<button onClick={() => setCounter(counter + 1)}>Click</button>
			<div>
				<Button variant="contained" onClick={() => createTable()}>
					Create Table
				</Button>
				<TextField value={number} onChange={(e) => setNumber(e.target.value)} />
				<Typography variant="h3">{number}</Typography>
			</div>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="right">Num</TableCell>
							{head.map((num, index) => {
								return (
									<TableCell key={index} align="right">
										{num}
									</TableCell>
								);
							})}
						</TableRow>
					</TableHead>
					<TableBody>
						{arrMain.map((row, index) => (
							<TableRow
								key={index}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								{row.map((nums, index) => {
									return (
										<TableCell key={index} align="right">
											{nums}
										</TableCell>
									);
								})}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default Increment;
