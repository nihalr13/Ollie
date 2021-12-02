import React from 'react';
import { render, screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom'
import App from './App';

test('render h1 element', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  expect(screen.getByText('Ollie')).toBeInTheDocument();
});