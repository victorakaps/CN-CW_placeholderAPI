import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import { CardData } from './Types';

function App() {
	const [data, setData] = useState<any>([]);
	useEffect(() => {
		(async () => {
			const res = await axios.get(
				'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=50'
			);
			setData(res.data);
		})();
	}, []);

	return (
		<div className="App">
			{!data.length ? (
				<h3>Loading.....</h3>
			) : (
				<div className="cards">
					{data.map((cardData: CardData) => (
						<Card data={cardData} key={cardData.id} />
					))}
				</div>
			)}
		</div>
	);
}

export default App;
