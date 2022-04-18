import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Main } from './Main';
import userEvent from '@testing-library/user-event';
import { server } from './Server';
import { handler } from './MockApi';

beforeAll(() =>
  server.listen({
    onUnhandledRequest: 'error',
  })
);

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('test mainPage', () => {
  test('fetch work', async () => {
    render(<Main />);
    const input = screen.getByTestId('search');
    userEvent.type(input, 'rick');
    const searchBtn = screen.getByTestId('searchBtn');
    userEvent.click(searchBtn);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
    await waitFor(() => {
      expect(handler).toHaveBeenCalled();
    });
    expect(await screen.getByTestId('loader')).not.toBeInTheDocument();
  });
});
