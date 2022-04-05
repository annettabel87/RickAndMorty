import { render, screen } from '@testing-library/react';
import { FormCard } from './Card/FormCard';
import { CardsField } from './CardsField';

const data = [
  {
    id: '0',
    name: 'Anna',
    surname: 'Repeshko',
    birth: '12.09.1987',
    country: 'Russia',
    gender: 'Female',
    foto: null,
    agree: true,
  },
  {
    id: '1',
    name: 'Lev',
    surname: 'Repeshko',
    birth: '12.09.1987',
    country: 'Russia',
    gender: 'Male',
    foto: null,
    agree: true,
  },
];

test('FormCard renders', () => {
  render(<CardsField {...data} />);
  const cardElement = screen.getAllByTestId('formCard');
  expect(cardElement).toHaveLength(data.length);
});
