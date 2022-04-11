import { render, screen } from '@testing-library/react';
import { Loader } from './Loader';

test('Loader render', () => {
  render(<Loader />);
  expect(screen.getByTestId('loader')).toBeInTheDocument();
});
