import React from 'react';
import { render, fireEvent, waitFor, getAllByTestId} from '@testing-library/react';
import Game from './Game';



test('renders component', async () => {
    const { getAllByText } = render(<Game/>)
    expect(getAllByText('?')).toBeTruthy();
})

test('selects card', async () => {
    const { getAllByTestId } = render(<Game/>)
    const sq = getAllByTestId('btn');
    fireEvent.click(sq[0]);
    await waitFor(()=> {
    expect(sq[0].className).toEqual("square squares square-selected")
    })
    
})