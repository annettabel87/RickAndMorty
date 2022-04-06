import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Form } from './Form';
import userEvent from '@testing-library/user-event';

describe('test form', () => {
  const addFunction = jest.fn();
  render(<Form addCardData={addFunction} />);
  test('renders form component', async () => {
    const inputName = screen.getByTestId('input-name');
    expect(inputName).toBeInTheDocument();
    userEvent.type(inputName, 'Anna');
    expect(screen.findByText('Anna'));
    const inputSurname = screen.getByTestId('input-surname');
    expect(inputSurname).toBeInTheDocument();
    userEvent.type(inputSurname, 'Repeshko');
    expect(screen.findByText('Repeshko'));
    const inputBirth = screen.getByTestId('input-birth');
    expect(inputBirth).toBeInTheDocument();
    userEvent.type(inputBirth, '2020-05-24');
    expect(screen.findByText('2020-05-24'));
    const inputCountry = screen.getByTestId('select-country');
    expect(inputCountry).toBeInTheDocument();
    const inputGender = screen.getByTestId('input-gender');
    expect(inputGender).toBeInTheDocument();
    expect(inputGender).not.toBeChecked();
    fireEvent.click(inputGender);
    expect(inputGender).toBeChecked();
    const inputFile = screen.getByTestId('input-file');
    expect(inputFile).toBeInTheDocument();
    fireEvent.change(inputFile, {
      target: {
        files: [new File(['img'], 'chucknorris.jpg', { type: 'image/png' })],
      },
    });
    expect(screen.findByText('chucknorris.jpg'));
    const inputAgree = screen.getByTestId('input-agree');
    expect(inputAgree).toBeInTheDocument();
    fireEvent.click(inputAgree);
    const inputSubmit = screen.getByTestId('form-btn');
    expect(inputSubmit).toBeInTheDocument();
    fireEvent.click(inputSubmit);
    expect(addFunction).toHaveBeenCalledTimes(1);
  });
  test('test gender checkbox', () => {
    const addFunction = jest.fn();
    render(<Form addCardData={addFunction} />);
    const inputGender = screen.getByTestId('input-gender');
    expect(inputGender).toBeInTheDocument();
    expect(inputGender).not.toBeChecked();
    fireEvent.click(inputGender);
    expect(inputGender).toBeChecked();
  });
});
