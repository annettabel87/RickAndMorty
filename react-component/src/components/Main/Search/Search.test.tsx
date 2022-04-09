import React from 'react';
import { render, screen } from '@testing-library/react';
import { Search } from './Search';
import userEvent from '@testing-library/user-event';

interface Store {
  [key: string]: string;
}
class LocalStorageMock {
  store: Store;
  length: number;
  constructor() {
    this.store = {};
    this.length = 0;
  }

  clear() {
    this.store = {};
  }
  key(n: number) {
    if (typeof n === 'undefined') {
      throw new Error('TypeError: key undefined');
    }
    if (n >= Object.keys(this.store).length) {
      return null;
    }
    return Object.keys(this.store)[n];
  }
  getItem(key: string) {
    return this.store[key] || null;
  }
  setItem(key: string, value: string) {
    this.store[key] = String(value);
  }
  removeItem(key: string) {
    delete this.store[key];
  }
}
const mockForSearch = {
  handleChange: jest.fn(),
  handleSubmit: jest.fn(),
  reset: jest.fn(),
  searchValue: 'rick',
};
describe('searchBar', () => {
  test('renders search component', () => {
    render(<Search {...mockForSearch} />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  test('render input if localStorage empty', () => {
    render(<Search {...mockForSearch} />);
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
  });

  test('render value from localStorage if it contain them', () => {
    localStorage = new LocalStorageMock();
    const { rerender } = render(<Search {...mockForSearch} />);
    userEvent.type(screen.getByDisplayValue(''), 'react');
    rerender(<Search {...mockForSearch} />);
    expect(screen.getByDisplayValue('react')).toBeInTheDocument;
  });
  test('onchange works', () => {
    render(<Search {...mockForSearch} />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'React');
    expect(screen.getByRole('textbox')).toContainHTML('React');
  });
});
