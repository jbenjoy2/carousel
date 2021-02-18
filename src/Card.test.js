import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import Card from './Card';

it('should render', () => {
	render(
		<Card
			src={image1}
			caption="Photo by Richard Pasquarella on Unsplash"
			currNum={1}
			totalNum={1}
		/>
	);
});

it('should match snapshot', () => {
	const { asFragment } = render(
		<Card
			src={image1}
			caption="Photo by Richard Pasquarella on Unsplash"
			currNum={1}
			totalNum={1}
		/>
	);
	expect(asFragment()).toMatchSnapshot();
});

it('should match snapshot', () => {
	const { asFragment } = render(
		<Card
			src={image2}
			caption="Photo by Richard Pasquarella on Unsplash"
			currNum={2}
			totalNum={2}
		/>
	);
	expect(asFragment()).toMatchSnapshot();
});

it('should match snapshot', () => {
	const { asFragment } = render(
		<Card
			src={image3}
			caption="Photo by Richard Pasquarella on Unsplash"
			currNum={3}
			totalNum={3}
		/>
	);
	expect(asFragment()).toMatchSnapshot();
});
