import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IRickAndMortyData } from '../../../../type/type';
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

describe('cards test', () => {
  beforeEach(() => {
    render(<Card {...data} />);
  });
  test('Card renders', () => {
    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByTestId('card-btn')).toBeInTheDocument();
  });
  test('render fullCard', async () => {
    userEvent.click(screen.getByTestId('card-btn'));
    waitFor(() => {
      expect(screen.getByTestId('fullcard')).toBeInTheDocument();
    });
  });
});
