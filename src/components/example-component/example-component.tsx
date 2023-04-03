import {
	Component,
	h,
	Prop,
} from '@stencil/core';

@Component({
	shadow: true,
	styleUrl: 'example-component.scss',
	tag: 'example-component',
})
export class ExampleComponent {
	@Prop() exampleProp: string;

	public render(): JSX.Element {
		return (
			<div>
				<h1>A little component to show you cool stuff</h1>
				<p>
					Here we use a text Knob to play with this component in the preview:{' '}
					<slot></slot>
				</p>
				<p>
					And that&apos;s a Stencil Prop: {this.exampleProp} - have a look at the docs
					tab in the preview to see the autogenerated readme.
				</p>
			</div>
		);
	}
}