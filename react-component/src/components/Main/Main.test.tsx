import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { Main } from './Main';
import { apiConstants } from '../../constants';

const data = [
  {
    id: 1,
    name: 'Rick',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth',
      url: '',
    },
    location: {
      name: 'Earth',
      url: '',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: ['', ''],
    url: '',
    created: '',
  },
  {
    id: 2,
    name: 'Morty',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth',
      url: '',
    },
    location: {
      name: 'Earth',
      url: '',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: ['', ''],
    url: '',
    created: '',
  },
];
beforeEach(() => {
  render(<Main />);
});
describe('test mainPage', () => {
  const server = setupServer(
    rest.get(apiConstants.characterUrl, (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(data));
    })
  );
  beforeAll(() => server.listen());

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => server.close());
  test('renders search component', () => {
    expect(screen.getByTestId('search')).toBeInTheDocument();
  });
  test('renders cardsField component', () => {
    expect(screen.getByTestId('cardsField')).toBeInTheDocument();
  });
  test('render cards according api mock', async () => {
    render(<Main />);
    waitFor(() => {
      expect(screen.getAllByTestId('card').length).toBe(2);
    });
  });
  test('fetch work', async () => {
    userEvent.type(screen.getByTestId('search-input'), 'rick');
    userEvent.click(screen.getByTestId('searchBtn'));

    waitFor(() => {
      expect(screen.getByTestId('loader')).toBeInTheDocument();
    });
    waitFor(() => {
      expect(screen.getByTestId('loader')).not.toBeInTheDocument();
    });
    waitFor(() => {
      expect(screen.getAllByTestId('card').length).toBe(1);
    });
  });
});
