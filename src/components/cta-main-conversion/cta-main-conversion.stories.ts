import { jsxDecorator } from 'storybook-addon-jsx';
import readme from './readme.md';
import image from '../../assets/mountain.jpg';

// eslint-disable-next-line import/no-default-export
export default {
	title: 'cta-main-conversion',
	parameters: {
		docs: { description: { component: readme } },
		jest: ['cta-main-conversion.spec.tsx', 'cta-main-conversion.e2e.ts'],
	},
	decorators: [jsxDecorator],
};

export const empty = (): string => `
  <cta-main-conversion
  	headline="CTA - Main conversion"
	cta-title="A wonderful serenity has taken possession"
	cta-description="A wonderful serenity has taken possession of my entire soul, like there sweet mo"
	image=${image}></cta-main-conversion>
`;
