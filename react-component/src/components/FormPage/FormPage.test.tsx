import React from 'react';
import { render, screen } from '@testing-library/react';
import { FormPage } from './FormPage';

test('renders search component', () => {
  render(<FormPage />);
  const label = screen.getByText(/name/i);
  expect(label).toBeInTheDocument();
});
