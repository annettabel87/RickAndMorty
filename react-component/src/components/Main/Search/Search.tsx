import React from 'react';
import { ISearchProps } from '../Main';
import './Search.css';

export class Search extends React.Component<ISearchProps> {
  constructor(props: ISearchProps) {
    super(props);
  }

  render() {
    const { handleChange, handleSubmit, searchValue } = this.props;
    return (
      <div className="search-wrapper" data-testid="main-page">
        <form className="search" onSubmit={handleSubmit}>
          <label htmlFor="search" />
          Enter character name
          <input
            className="search-input"
            type="text"
            value={searchValue}
            onChange={handleChange}
            name="search"
          ></input>
          <button className="search-btn" type="submit"></button>
        </form>
      </div>
    );
  }
}
