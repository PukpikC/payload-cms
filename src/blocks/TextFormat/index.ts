import {Block} from "payload/types";
import {Header} from "./Header"

export const textBody: Block = {
	slug: 'textBody',
	fields: [
		{
			name: 'textBody',
			type: 'richText',
			required: true,
		},
		{
			name: 'textColor',
			type: 'text',
		},
	]
};

export const headerAndDescription: Block = {
	slug: 'headerAndDescription',
	fields: [
		{
			name: 'header',
			label: 'Header',
			type: 'group',
			localized: true,
			fields: [
				{
					name: 'headerText',
					type: 'text',
					required: true,
				},
				{
					name: 'headerSize',
					type: 'select',
					required: true,
					defaultValue: 'h1',
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
					defaultValue: '#008bd2'
				}
			]
		},
		{
			name: 'description',
			label: 'Description',
			localized: true,
			type: 'group',
			fields: [
				{
					name: 'textBody',
					type: 'richText',
					required: true,
				},
				{
					name: 'textColor',
					type: 'text',
					defaultValue: '#2d2d2d'
				}
			]
		}
	]
};

export const textFormat = {
	Header,
	textBody,
	headerAndDescription
};

export const components = {
	Header
};
