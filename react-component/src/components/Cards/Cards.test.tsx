import { render, screen } from '@testing-library/react';
import { Card } from './Card/Card';

const data = [
  {
    id: 21169,
    name: 'name1',
    price: 100,
    age: '1+',
    details: 10,
  },
  {
    id: 21177,
    name: 'name2',
    price: 200,
    age: '2+',
    details: 20,
  },
];

test('Card renders', () => {
  data.map((item) => {
    render(<Card {...item} />);
  });
  const cardElement = screen.getAllByTestId('card');
  expect(cardElement).toHaveLength(data.length);
});