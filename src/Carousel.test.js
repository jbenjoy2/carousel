import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Carousel from './Carousel';

it('should render', () => {
	render(<Carousel />);
});

it('should match snapshot', () => {
	const { asFragment } = render(<Carousel />);
	expect(asFragment()).toMatchSnapshot();
});

it('works when you click on the right arrow', function() {
	const { queryByTestId, queryByAltText } = render(<Carousel />);

	// expect the first image to show, but not the second
	expect(queryByAltText('Photo by Richard Pasquarella on Unsplash')).toBeInTheDocument();
	expect(queryByAltText('Photo by Pratik Patel on Unsplash')).not.toBeInTheDocument();

	// move forward in the carousel
	const rightArrow = queryByTestId('right-arrow');
	fireEvent.click(rightArrow);

	// expect the second image to show, but not the first
	expect(queryByAltText('Photo by Richard Pasquarella on Unsplash')).not.toBeInTheDocument();
	expect(queryByAltText('Photo by Pratik Patel on Unsplash')).toBeInTheDocument();
});
it('works when you click on the left arrow', function() {
	const { queryByTestId, queryByAltText } = render(<Carousel />);

	// expect the first image to show, but not the second
	expect(queryByAltText('Photo by Richard Pasquarella on Unsplash')).toBeInTheDocument();
	expect(queryByAltText('Photo by Pratik Patel on Unsplash')).not.toBeInTheDocument();

	// move forward in the carousel
	const rightArrow = queryByTestId('right-arrow');
	fireEvent.click(rightArrow);

	// expect the second image to show, but not the first
	expect(queryByAltText('Photo by Richard Pasquarella on Unsplash')).not.toBeInTheDocument();
	expect(queryByAltText('Photo by Pratik Patel on Unsplash')).toBeInTheDocument();

	// move backward in the carousel
	const leftArrow = queryByTestId('left-arrow');
	fireEvent.click(leftArrow);

	// expect the first image to show, but not the second
	expect(queryByAltText('Photo by Richard Pasquarella on Unsplash')).toBeInTheDocument();
	expect(queryByAltText('Photo by Pratik Patel on Unsplash')).not.toBeInTheDocument();
});

it('should hide the arrows at either end of the array', function() {
	const { queryByTestId, queryByAltText } = render(<Carousel />);

	// first image SHOULD be showing but let's make sure
	expect(queryByAltText('Photo by Richard Pasquarella on Unsplash')).toBeInTheDocument();
	expect(queryByAltText('Photo by Pratik Patel on Unsplash')).not.toBeInTheDocument();

	// if first image is showing, left arrow should NOT be in the document
	const leftArrow = queryByTestId('left-arrow');
	expect(leftArrow).not.toBeInTheDocument();

	// fire two clicks of right arrow to be on the last image
	const rightArrow = queryByTestId('right-arrow');
	fireEvent.click(rightArrow);
	fireEvent.click(rightArrow);

	// check and make sure we are on the third image now, not second or first
	expect(queryByAltText('Photo by Josh Post on Unsplash')).toBeInTheDocument();
	expect(queryByAltText('Photo by Pratik Patel on Unsplash')).not.toBeInTheDocument();
	expect(queryByAltText('Photo by Richard Pasquarella on Unsplash')).not.toBeInTheDocument();

	// if we have made it here, we are on the third image and we should check that the right arrow is NOT in the document
	expect(rightArrow).not.toBeInTheDocument();
});
