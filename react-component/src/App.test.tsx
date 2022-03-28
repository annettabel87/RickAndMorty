import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

describe('test app', () => {
  test('Router test', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const mainLink = screen.getByText(/main/i);
    const aboutLink = screen.getByText(/About Us/i);
    const cardsLink = screen.getByText(/cards/i);
    // userEvent.click(aboutLink);
    // expect(screen.getByText(/About Us/i));
    userEvent.click(cardsLink);
    expect(screen.getByText(/lego/i)).toBeInTheDocument();
    userEvent.click(mainLink);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    userEvent.click(aboutLink);
    expect(screen.getByTestId('about-title')).toBeInTheDocument();
  });

  test('Error page test', () => {
    render(
      <MemoryRouter initialEntries={['/123']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });
});
