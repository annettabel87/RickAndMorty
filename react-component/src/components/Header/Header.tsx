import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { routers } from '../../constants';

export class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <NavLink className="header-item" to={routers.ROUTE_MAIN}>
          Main
        </NavLink>
        <NavLink className="header-item" to={routers.ROUTE_ABOUT}>
          About Us
        </NavLink>
        <NavLink className="header-item" to={routers.ROUTE_CARDS}>
          Cards
        </NavLink>
        <NavLink className="header-item" to={routers.ROUTE_FORM}>
          Form
        </NavLink>
      </header>
    );
  }
}
