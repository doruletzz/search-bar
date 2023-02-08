import React, { ReactNode } from 'react';

import './CardComponent.css';

type CardComponentProps = {
	title: string;
	subtitle: string;
	slug?: string;
	children: ReactNode;
};

export const CardComponent = ({
	title,
	subtitle,
	slug,
	children,
}: CardComponentProps) => {
	return (
		<div id={slug} className='card'>
			<h6 className='title'>{title}</h6>
			{subtitle && <p className='subtitle'>{subtitle}</p>}
			<hr />
			{children && <div className='content'>{children}</div>}
		</div>
	);
};
