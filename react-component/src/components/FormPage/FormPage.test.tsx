import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { FormPage } from './FormPage';
import userEvent from '@testing-library/user-event';

describe('FormPage test', () => {
  render(<FormPage />);
  test('renders form component', () => {
    const form = screen.getByTestId('form');
    expect(form).toBeInTheDocument();
  });
  test('renders cardField component', () => {
    render(<FormPage />);
    //screen.debug();
    const cardField = screen.getByTestId('cardField');
    expect(cardField).toBeInTheDocument();
  });
  test('add cards after submit form ', async () => {
    render(<FormPage />);
    global.URL.createObjectURL = jest.fn();
    const inputName = screen.getByTestId('input-name');
    userEvent.type(inputName, 'Anna');
    const inputSurname = screen.getByTestId('input-surname');
    userEvent.type(inputSurname, 'Repeshko');
    const inputBirth = screen.getByTestId('input-birth');
    userEvent.type(inputBirth, '2020-05-24');
    const inputCountry = screen.getByTestId('select-country');
    const inputGender = screen.getByTestId('input-gender');
    fireEvent.click(inputGender);
    const inputAgree = screen.getByTestId('input-agree');
    fireEvent.click(inputAgree);
    const inputSubmit = screen.getByTestId('form-btn');
    fireEvent.click(inputSubmit);
    expect(screen.getByTestId('formCard')).toBeInTheDocument();
  });
});
