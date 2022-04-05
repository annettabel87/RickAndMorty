import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './components/Header/Header';

describe('test app', () => {
  test('Router test', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const mainLink = screen.getByText(/Main/i);
    const aboutLink = screen.getByText(/about/i);
    const cardsLink = screen.getByText(/cards/i);
    const formLink = screen.getByText(/form/i);
    userEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
    userEvent.click(cardsLink);
    expect(screen.getByText(/lego/i)).toBeInTheDocument();
    userEvent.click(mainLink);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
    userEvent.click(formLink);
    expect(screen.getByTestId('form-page')).toBeInTheDocument();
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
