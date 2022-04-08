import React from 'react';
import { Search } from './Search/Search';
import './Main.css';

export class Main extends React.Component {
  render() {
    return (
      <div className="mainPage" data-testid="main-page">
        <Search />
      </div>
    );
  }
}
