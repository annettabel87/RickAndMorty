import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { MemoryRouter } from 'react-router-dom';

test('render header', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  const mainLinkElement = screen.getByText(/main/i);
  expect(mainLinkElement).toBeInTheDocument();
  const aboutLinkElement = screen.getByText(/about/i);
  expect(aboutLinkElement).toBeInTheDocument();
  const cardsLinkElement = screen.getByText(/cards/i);
  expect(cardsLinkElement).toBeInTheDocument();
  const formLinkElement = screen.getByText(/form/i);
  expect(formLinkElement).toBeInTheDocument();
});
