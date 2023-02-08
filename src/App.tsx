import React, { ReactNode, useState } from 'react';
import Card from './components/Card';
import SearchBar from './components/SearchBar';

import './App.css';

const lorem =
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, odit dolores. Pariatur hic perspiciatis doloremque tempora assumenda voluptate odit quos modi, nemo facere natus, quia, dolorem praesentium quis. Laboriosam, culpa?';

const title = (number: number) => `Card #${number}`;
const subtitle = 'This is one of the greatest cards ever created';
const content = <div>{lorem}</div>;

type CardData = {
	title: string;
	subtitle: string;
	content: ReactNode;
};

const COUNT = 10;

let mockData: Array<CardData> = [];

for (let i = 0; i < COUNT; ++i)
	mockData.push({ title: title(i), subtitle, content });

export const App = () => {
	const [searchText, setSearchText] = useState('');

	const filterCard = (e: CardData) =>
		e.title.toLowerCase().includes(searchText.toLowerCase());

	return (
		<>
			<SearchBar
				label='SEARCH'
				inputText={searchText}
				setInputText={setSearchText}
			/>
			<div className='card-container'>
				{mockData.filter(filterCard).map((data, index) => (
					<Card
						key={index}
						title={data.title}
						subtitle={data.subtitle}
					>
						{data.content}
					</Card>
				))}
			</div>
		</>
	);
};

export default App;
