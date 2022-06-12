import { render, screen } from '@testing-library/react';
import { AboutUs } from './AboutUs';

test('renders learn react link', () => {
  render(<AboutUs />);
  const linkElement = screen.getByText(/About Us/i);
  expect(linkElement).toBeInTheDocument();
});
