import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IRickAndMortyData } from '../CardsField';
import { FullCard } from './FullCard';

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
  render(<FullCard data={data} onClose={jest.fn()} />);
  expect(screen.getByText(/name/i)).toBeInTheDocument();
  expect(screen.getByText(/Gender/i)).toBeInTheDocument();
  expect(screen.getByTestId('close-btn')).toBeInTheDocument();
});
