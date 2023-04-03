import { Component, Prop, State, h } from '@stencil/core';

@Component({
	tag: 'cta-main-conversion',
	styleUrl: 'cta-main-conversion.scss',
	shadow: true,
})
export class CtaMainConversion {
	@Prop() headline: string;
	@Prop() ctaTitle: string;
	@Prop() ctaDescription: string;
	@Prop() image: string;

	@State() _isContactBoxOpen: boolean = false;

	private openContactBox() {
		this._isContactBoxOpen = true;
	}

	private closeContactBox() {
		this._isContactBoxOpen = false;
	}

	render() {
		return (
			<section>
				<div class="container">
					<h1 class="headline">{this.headline}</h1>
				</div>
				<div class="main">
					<div class="container">
						<div class="main-content">
							<h2>{this.ctaTitle}</h2>
							<p>{this.ctaDescription}</p>
							<button onClick={() => this.openContactBox()}>Contact Us</button>
						</div>
						<div class="main-image">
							<img src={this.image} alt="CTA Main Image" />
						</div>
					</div>
				</div>
				{this._isContactBoxOpen ? (
					<div class="contact-box">
						<div class="container">
							<div class="contact-box-header">
								<h1>Contact us</h1>
								<button class="contact-box-close-btn" onClick={() => this.closeContactBox()}>
									Close
								</button>
							</div>
						</div>
					</div>
				) : null}
			</section>
		);
	}
}
