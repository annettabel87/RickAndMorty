import { render, screen } from '@testing-library/react';
import { IRickAndMortyData } from '../../Main';
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
  render(<Card {...data} />);
  expect(screen.getByText(/details/i)).toBeInTheDocument();
  expect(screen.getByText(/age/i)).toBeInTheDocument();
});
