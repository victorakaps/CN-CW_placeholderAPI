import React from 'react';
import { CardData } from '../../Types';

interface CardProps {
	data: CardData;
}

const Card: React.FC<CardProps> = ({ data }) => {
	return (
		<div className="card">
			<img src={data.url} alt={data.title} />
			<h4>{data.title}</h4>
		</div>
	);
};
export default Card;
