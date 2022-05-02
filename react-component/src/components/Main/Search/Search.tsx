import React, { FC, useCallback, useState } from 'react';
import { valueToSort } from '../../../constants';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { mainSlice } from '../../store/mainReducer';
import './Search.css';

export const Search: FC = () => {
  const [tempSearch, setTempSearch] = useState('');
  const { SEARCH, SET_SORT } = mainSlice.actions;
  const dispatch = useAppDispatch();
  const { sortValue } = useAppSelector((state) => state.mainReducer);

  const onSubmit = useCallback(
    async (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(SEARCH(tempSearch));
      setTempSearch('');
    },
    [SEARCH, dispatch, tempSearch]
  );

  return (
    <div className="search-wrapper" data-testid="search">
      <form className="search" onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => onSubmit(e)}>
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
      <div className="sort-wrapper">
        <p className="search-label">Sort by...</p>
        <select
          className="select"
          value={sortValue}
          onChange={(e) => dispatch(SET_SORT(e.target.value))}
        >
          <option value="default"></option>
          <option value={valueToSort.NAME}>By name A-Z</option>
          <option value={valueToSort.NAME_REVERSE}>By name Z-A</option>
          <option value={valueToSort.GENDER}>By gender Female-Male</option>
          <option value={valueToSort.GENDER_REVERSE}>By gender Male-Female</option>
        </select>
      </div>
    </div>
  );
};
