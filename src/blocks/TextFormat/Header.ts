import React from 'react';
import { Block } from 'payload/types';

export const Header: Block = {
	slug: 'header',
	fields: [
		{
			name: 'headerText',
			type: 'text',
			label: 'Header Text',
			localized: true,
			required: true,
		},
		{
			name: 'headerSize',
			label: 'Header Size',
			type: 'select',
			required: true,
			options: [
				{
					label: 'H1',
					value: 'h1',
				},
				{
					label: 'H2',
					value: 'h2',
				},
				{
					label: 'H3',
					value: 'h3',
				},
			],
		},
		{
			name: 'headerColor',
			type: 'text',
		},
	]
};

export type Type = {
	headerText: string
	headerSize: string
	headerColor: string
}

export const Component: React.FC<Type> = (props) => {
	const {headerText, headerSize, color} = props;

	return (
		{headerText}
	);
};
