import React from 'react';
import { render, screen } from '@testing-library/react';
import { Main } from './Main';
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

describe('searchBar', () => {
  test('renders search component', () => {
    render(<Main />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  test('render input if localStorage empty', () => {
    render(<Main />);
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
  });

  test('render value from localStorage if it contain them', () => {
    localStorage = new LocalStorageMock();
    const { rerender } = render(<Main />);
    userEvent.type(screen.getByDisplayValue(''), 'react');
    rerender(<Main />);
    expect(screen.getByDisplayValue('react')).toBeInTheDocument;
  });
  test('onchange works', () => {
    render(<Main />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'React');
    expect(screen.getByRole('textbox')).toContainHTML('React');
  });
});
