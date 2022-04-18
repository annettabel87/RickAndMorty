import { render, screen } from '@testing-library/react';
import { IRickAndMortyData } from '../CardsField';
import { Card } from './Card';

const data: IRickAndMortyData = {
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
};

test('Card renders', () => {
  render(<Card data={data} open={jest.fn()} />);
  expect(screen.getByText(/name/i)).toBeInTheDocument();
  expect(screen.getByTestId('card-btn')).toBeInTheDocument();
});
