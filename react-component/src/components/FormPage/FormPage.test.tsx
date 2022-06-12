import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { FormPage } from './FormPage';
import userEvent from '@testing-library/user-event';

type typeIntoFormProps = {
  name?: string;
  surname?: string;
};
const typeIntoForm = ({ name, surname }: typeIntoFormProps) => {
  const inputName = screen.getByTestId('input-name');
  const inputSurname = screen.getByTestId('input-surname');
  if (name) {
    userEvent.type(inputName, name);
  }
  if (surname) {
    userEvent.type(inputSurname, surname);
  }
  return {
    inputName,
    inputSurname,
  };
};
const addFunction = jest.fn();
describe('FormPage test', () => {
  beforeEach(() => {
    render(<FormPage />);
  });
  test('renders form component', () => {
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });
  test('renders cardField component', () => {
    expect(screen.getByTestId('cardField')).toBeInTheDocument();
  });
  test('add cards after submit form ', () => {
    global.URL.createObjectURL = jest.fn();
    typeIntoForm({ name: 'Anna' });
    typeIntoForm({ surname: 'Repeshko' });
    userEvent.type(screen.getByTestId('input-birth'), '2020-05-24');
    fireEvent.change(screen.getByTestId('input-file'), {
      target: {
        files: [new File(['img'], 'chucknorris.jpg', { type: 'image/png' })],
      },
    });
    userEvent.click(screen.getByTestId('input-agree'));
    userEvent.click(screen.getByTestId('form-btn'));
    waitFor(() => {
      expect(screen.getByTestId('formCard')).toBeInTheDocument;
    });
  });
});
