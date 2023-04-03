import { jsxDecorator } from 'storybook-addon-jsx';
import readme from './readme.md';
import image from '../../assets/mountain.jpg';
import { text } from '@storybook/addon-knobs';

// eslint-disable-next-line import/no-default-export
export default {
	title: 'cta-main-conversion',
	parameters: {
		docs: { description: { component: readme } },
		jest: ['cta-main-conversion.spec.tsx', 'cta-main-conversion.e2e.ts'],
	},
	decorators: [jsxDecorator],
};

export const empty = ({
	headline = text('Headline', 'CTA - Main conversion'),
	title = text('CTA Title', 'A wonderful serenity has taken possession'),
	description = text(
		'CTA Description',
		'A wonderful serenity has taken possession of my entire soul, like there sweet mo'
	),
}: { headline?: string; title?: string; description?: string } = {}): string => `
	<cta-main-conversion
		headline="${headline}"
		cta-title="${title}"
		cta-description="${description}"
		image=${image}></cta-main-conversion>
	`;
