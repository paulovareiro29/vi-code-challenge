import { Component, Host, h } from '@stencil/core';

@Component({
	tag: 'cta-main-conversion',
	styleUrl: 'cta-main-conversion.scss',
	shadow: true,
})
export class CtaMainConversion {
	render() {
		return (
			<Host>
				<slot></slot>
			</Host>
		);
	}
}
