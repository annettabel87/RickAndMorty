import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export class Header extends React.Component {
  render() {
    return (
      <header>
        <NavLink to="/">Main</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/cards">Cards</NavLink>
      </header>
    );
  }
}
