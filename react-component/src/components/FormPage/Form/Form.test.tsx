import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Form } from './Form';
import userEvent from '@testing-library/user-event';

describe('test form', () => {
  const addFunction = jest.fn();
  beforeEach(() => {
    render(<Form addCardData={addFunction} />);
  });
  test('test input to name', () => {
    const inputName = screen.getByTestId('input-name');
    expect(inputName).toBeInTheDocument();
    userEvent.type(inputName, 'Anna');
    expect(screen.findByText('Anna'));
  });
  test('test input to surname', () => {
    const inputSurname = screen.getByTestId('input-surname');
    expect(inputSurname).toBeInTheDocument();
    userEvent.type(inputSurname, 'Repeshko');
    expect(screen.findByText('Repeshko'));
  });
  test('test input to birth', () => {
    const inputBirth = screen.getByTestId('input-birth');
    expect(inputBirth).toBeInTheDocument();
    userEvent.type(inputBirth, '2020-05-24');
    expect(screen.findByText('2020-05-24'));
  });
  test('test select country', () => {
    const inputCountry = screen.getByTestId('select-country');
    expect(inputCountry).toBeInTheDocument();
    userEvent.selectOptions(inputCountry, 'Belarus');
    expect(screen.findByText('Belarus'));
  });
  test('test gender switcher', () => {
    const inputGender = screen.getByTestId('input-gender');
    expect(inputGender).toBeInTheDocument();
    expect(inputGender).not.toBeChecked();
    fireEvent.click(inputGender);
    expect(inputGender).toBeChecked();
  });
  test('test file input', () => {
    const inputFile = screen.getByTestId('input-file');
    expect(inputFile).toBeInTheDocument();
    fireEvent.change(inputFile, {
      target: {
        files: [new File(['img'], 'chucknorris.jpg', { type: 'image/png' })],
      },
    });
    expect(screen.findByText('chucknorris.jpg'));
  });
  test('test checkbox input', () => {
    const inputAgree = screen.getByTestId('input-agree');
    expect(inputAgree).toBeInTheDocument();
    userEvent.click(inputAgree);
    expect(inputAgree).toBeChecked();
  });
  test('test render submit button', () => {
    const inputSubmit = screen.getByTestId('form-btn');
    expect(inputSubmit).toBeInTheDocument();
  });
});
