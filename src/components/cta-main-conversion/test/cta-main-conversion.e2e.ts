import { newE2EPage } from '@stencil/core/testing';

describe('cta-main-conversion', () => {
	it('renders', async () => {
		const page = await newE2EPage();
		await page.setContent('<cta-main-conversion></cta-main-conversion>');

		const element = await page.find('cta-main-conversion');
		expect(element).toHaveClass('hydrated');
	});
});
