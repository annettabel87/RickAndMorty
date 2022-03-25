import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css';

export class Header extends React.Component {
  render() {
    return (
      <header>
        <a href="/">Main</a>
        <a href="/about">About Us</a>
        <a href="/notfound">404</a>
        <a href="/cards">Cards</a>
      </header>
    );
  }
}
