import React from 'react';
import { render, screen } from '@testing-library/react';
import { Main } from './Main';
import userEvent from '@testing-library/user-event';

test('renders search component', () => {
  render(<Main />);
  const input = screen.getByRole('textbox');
  expect(input).toBeInTheDocument();
});

test('onchange works', () => {
  render(<Main />);
  const input = screen.getByRole('textbox');
  userEvent.type(input, '');
  expect(screen.getByRole('textbox')).toContainHTML('');
  userEvent.type(input, 'React');
  expect(screen.getByRole('textbox')).toContainHTML('React');
});
