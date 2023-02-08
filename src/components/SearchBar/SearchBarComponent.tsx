import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';

import './SearchBarComponent.css';

type SearchBarComponentProps = {
	label?: string;
	inputText: string;
	setInputText: Dispatch<SetStateAction<string>>;
};

export const SearchBarComponent = ({
	label,
	inputText,
	setInputText,
}: SearchBarComponentProps) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setInputText(value);
	};

	return (
		<div className='search-bar'>
			<label>{label}</label>
			<input value={inputText} onChange={handleChange} />
		</div>
	);
};
