import { render, screen } from '@testing-library/react';
import { Cards } from './Cards';

test('Cards renders', () => {
  render(<Cards />);
  const linkElement = screen.getAllByAltText(/Age/i);
  linkElement.map((element) => expect(element).toBeInTheDocument());
});
