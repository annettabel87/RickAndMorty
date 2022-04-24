import React, { FC, useEffect, useState } from 'react';
import { ISearchProps } from '../Main';
import './Search.css';

export const Search: FC<ISearchProps> = ({ searchValue, onSubmit }: ISearchProps) => {
  const [tempSearch, setTempSearch] = useState('');
  useEffect(() => {
    setTempSearch(searchValue);
  }, [searchValue]);
  return (
    <div className="search-wrapper" data-testid="search">
      <form
        className="search"
        onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => onSubmit(e, tempSearch)}
      >
        <label className="search-label" htmlFor="search">
          Enter character name
        </label>
        <div className="input-wrapper">
          <input
            className="search-input"
            type="text"
            value={tempSearch}
            onChange={(e) => {
              setTempSearch(e.currentTarget.value.toLocaleLowerCase());
            }}
            name="search"
            data-testid="search-input"
          ></input>
          <button className="search-btn" type="submit" data-testid="searchBtn"></button>
        </div>
      </form>
    </div>
  );
};
