import faker from 'faker';
import { jsxDecorator } from 'storybook-addon-jsx';

import { text } from '@storybook/addon-knobs';

import readme from './readme.md';

export default {
	decorators: [jsxDecorator],
	parameters: {
		docs: { description: { component: readme } },
		jest: [
			'example-component.spec.tsx',
			'example-component.e2e.ts',
		],
	},
	title: 'example-component',
};

export const empty = ({
	content = text('This is a text knob', faker.name.findName()),
}: { content?: string } = {}): string => `
  <example-component example-prop="Propmagic">${content}</example-component>
`;
