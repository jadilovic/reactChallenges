import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Search from './Search';

const Beer = () => {
	const [beers, setBeers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [search, setSearch] = useState('');
	const initialRender = useRef(true);

	const getBeers = async () => {
		const loadedBeers = await axios.get('https://api.punkapi.com/v2/beers');
		setBeers(loadedBeers.data);
		setLoading(false);
		initialRender.current = false;
		console.log(
			'count : ',
			loadedBeers.data.length,
			'beers : ',
			loadedBeers.data
		);
	};

	const searchData = () => {
		const filteredList = beers.filter((beer) => {
			return (
				beer.name.toLowerCase().includes(search.toLowerCase()) ||
				beer.tagline.toLowerCase().includes(search.toLowerCase())
			);
		});
		setBeers([...filteredList]);
		if (search.length < 1) {
			setLoading(true);
			getBeers();
		}
	};

	useEffect(() => {
		if (initialRender.current) {
			return;
		} else {
			console.log('test');
			searchData();
		}
	}, [search]);

	useEffect(() => {
		getBeers();
	}, []);

	console.log(search);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	return (
		<>
			<div>
				<h1>Beer</h1>
				<Search setSearch={setSearch} search={search} />
				<h4>{search}</h4>
				<ul>
					{beers.map((beer) => {
						return (
							<li key={beer.id}>
								<h5>Name: {beer.name}</h5>
								<h6>Tagline: {beer.tagline}</h6>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
};

export default Beer;
