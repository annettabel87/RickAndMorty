import { render, screen } from '@testing-library/react';
import { Card } from './Card';

const data = {
  id: 21169,
  name: 'name1',
  price: 100,
  age: '1+',
  details: 10,
};

test('Card renders', () => {
  render(<Card {...data} />);
  expect(screen.getByText(/details/i)).toBeInTheDocument();
  expect(screen.getByText(/age/i)).toBeInTheDocument();
});
