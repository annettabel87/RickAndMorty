import React from 'react';
import { render, screen } from '@testing-library/react';
import { Form } from './Form';

test('renders search component', () => {
  render(<Form />);
  // const input = screen.getByRole('textbox');
  // expect(input).toBeInTheDocument();
});
