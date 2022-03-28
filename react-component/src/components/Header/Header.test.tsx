import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

test('render header', () => {
  render(<Header />);
  const linkElement = screen.getByRole('');
  expect(linkElement).toBeInTheDocument();
});
