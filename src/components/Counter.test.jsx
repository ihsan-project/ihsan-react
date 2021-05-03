import React from 'react';
import { render, screen } from '@testing-library/react';
import Counter from './Counter';

describe('Tests', () => {
  it('renders learn react link', () => {
    render(<Counter count={ 1 }/>);
    const text = screen.getByText(/Count/i);
    expect(text).toBeInTheDocument();
  });
});
