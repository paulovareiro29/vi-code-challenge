import { newSpecPage } from '@stencil/core/testing';
import { CtaMainConversion } from '../cta-main-conversion';

describe('cta-main-conversion', () => {
	it('renders', async () => {
		const page = await newSpecPage({
			components: [CtaMainConversion],
			html: '<cta-main-conversion></cta-main-conversion>',
		});
		expect(page.root).toEqualHtml(`
      <cta-main-conversion>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cta-main-conversion>
    `);
	});
});
