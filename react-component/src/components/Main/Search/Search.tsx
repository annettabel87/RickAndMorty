import React, { FC } from 'react';
import { ISearchProps } from '../Main';
import './Search.css';

export const Search: FC<ISearchProps> = (props: ISearchProps) => {
  const { onSubmit, searchValue, handleChange } = props;
  return (
    <div className="search-wrapper" data-testid="search">
      <form className="search" onSubmit={onSubmit}>
        <label className="search-label" htmlFor="search">
          Enter character name
        </label>
        <div className="input-wrapper">
          <input
            className="search-input"
            type="text"
            value={searchValue}
            onChange={handleChange}
            name="search"
            data-testid="search-input"
          ></input>
          <button className="search-btn" type="submit" data-testid="searchBtn"></button>
        </div>
      </form>
    </div>
  );
};
