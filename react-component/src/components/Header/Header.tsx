import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { routers } from '../../constants';
import './Header.css';

export const Header: FC = () => {
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
};
