import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <NavLink className="header-item" to="/">
          Main
        </NavLink>
        <NavLink className="header-item" to="/about">
          About Us
        </NavLink>
        <NavLink className="header-item" to="/cards">
          Cards
        </NavLink>
        <NavLink className="header-item" to="/form">
          Form
        </NavLink>
      </header>
    );
  }
}
