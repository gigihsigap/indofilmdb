import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('Render main page', () => {
    const { getByText } = render(<App/>);
    const title = getByText(/Blockbuzter/i);
    expect(title).toBeInTheDocument();
})

// test('The second movie when searching "Raid" should be The Raid 2', () => {
//     const { container } = render(<App/>);
//     const movieTitles = container.querySelectorAll('h3');
//     // console.log(movieTitles);
//     const secondRaidTitle = movieTitles[1];
//     expect(secondRaidTitle.textContent).toBe('The Raid 2');
// })

test('Go to favorites page using navbar button', () => {
    const { getByTestId, getByText } = render(<App/>);
    const linkToFavorites = getByTestId('goToFavorites-btn');
    fireEvent.click(linkToFavorites);
    const favTableHeader = getByText('Movie');
    expect(favTableHeader).toBeInTheDocument();
})

test('Go to favorites page then go back to homepage', () => {
    const { getByTestId, getByText } = render(<App/>);
    const linkToFavorites = getByTestId('goToFavorites-btn');
    fireEvent.click(linkToFavorites);
    const backButton = getByTestId('goBack-btn');
    fireEvent.click(backButton);
    const favTableHeader = getByText('Favorites');
    expect(favTableHeader).toBeInTheDocument();
})
