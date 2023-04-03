import { jsxDecorator } from 'storybook-addon-jsx';
import readme from './readme.md';

// eslint-disable-next-line import/no-default-export
export default {
	title: 'cta-main-conversion',
	parameters: {
		docs: { description: { component: readme } },
		jest: [
			'cta-main-conversion.spec.tsx',
			'cta-main-conversion.e2e.ts',
		],
	},
	decorators: [jsxDecorator],
};

export const empty = (): string => `
  <cta-main-conversion></cta-main-conversion>
`;
