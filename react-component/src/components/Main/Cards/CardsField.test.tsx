import { render, screen } from '@testing-library/react';
import { Card } from './Card/Card';

const data = [
  {
    id: 1,
    name: 'Rick',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: {
      name: '',
      url: '',
    },
    location: {
      name: '',
      url: '',
    },
    image: '',
    episode: ['', ''],
    url: '',
    created: '',
  },
  {
    id: 2,
    name: 'Morty',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: {
      name: '',
      url: '',
    },
    location: {
      name: '',
      url: '',
    },
    image: '',
    episode: ['', ''],
    url: '',
    created: '',
  },
];

test('Card renders', () => {
  data.map((item) => {
    render(<Card {...item} />);
  });
  const cardElement = screen.getAllByTestId('card');
  expect(cardElement).toHaveLength(data.length);
});
