import React from 'react';
import { render, screen } from '@testing-library/react';
import { Search } from './Search';
import userEvent from '@testing-library/user-event';
import { Store } from '../../../type/type';

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
    render(<Search />);
    const input = screen.getByTestId('search-input');
    expect(input).toBeInTheDocument();
  });

  test('render input if localStorage empty', () => {
    render(<Search />);
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
  });

  test('render value from localStorage if it contain them', () => {
    localStorage = new LocalStorageMock();
    const { rerender } = render(<Search />);
    userEvent.type(screen.getByTestId('search-input'), 'rick');
    rerender(<Search />);
    expect(screen.getByTestId('search-input')).toContainHTML('rick');
  });
  test('onchange works', () => {
    render(<Search />);
    const input = screen.getByTestId('search-input');
    userEvent.type(input, 'rick');
    expect(screen.getByTestId('search-input')).toContainHTML('rick');
  });
});
