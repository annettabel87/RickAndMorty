import React from 'react';
import { render, screen } from '@testing-library/react';
import { FormPage } from './FormPage';

test('renders search component', () => {
  render(<FormPage />);
  // const input = screen.getByRole('textbox');
  // expect(input).toBeInTheDocument();
});
