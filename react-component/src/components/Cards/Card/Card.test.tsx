import { render, screen } from '@testing-library/react';
import { Card } from './Card';

const data = [
  {
    id: 21169,
    name: 'name1',
    price: 100,
    age: '1+',
    details: 10,
  },
  {
    id: 2,
    name: 'name2',
    price: 200,
    age: '2+',
    details: 20,
  },
];

test('Card renders', () => {
  render(<Card {...data[0]} />);
  const linkElement = screen.getByText(/name1/i);
  expect(linkElement).toBeInTheDocument();
});
