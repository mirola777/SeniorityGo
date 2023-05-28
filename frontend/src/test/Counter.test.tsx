// Counter.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from '../Counter';

describe('Counter component', () => {
  test('renders the counter with initial value of 0', () => {
    const { getByText } = render(<Counter />);
    const countElement = getByText('Count: 0');
    expect(countElement).toBeInTheDocument();
  });

  test('increments the count when the increment button is clicked', () => {
    const { getByText } = render(<Counter />);
    const incrementButton = getByText('Increment');
    const countElement = getByText('Count: 0');

    fireEvent.click(incrementButton);

    expect(countElement.textContent).toBe('Count: 1');
  });

  test('decrements the count when the decrement button is clicked', () => {
    const { getByText } = render(<Counter />);
    const decrementButton = getByText('Decrement');
    const countElement = getByText('Count: 0');

    fireEvent.click(decrementButton);

    expect(countElement.textContent).toBe('Count: -1');
  });
});
