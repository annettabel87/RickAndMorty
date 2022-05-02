import React, { FC, useEffect, useState } from 'react';
import { Search } from './Search/Search';
import { CardsField } from './Cards/CardsField';
import { Loader } from './Loader/Loader';
import { mainSlice } from '../store/mainReducer';
import { Pagination } from './Pagination/Pagination';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchCharacters } from '../store/actionCreators';
import './Main.css';

export const Main: FC = () => {
  const [status, setStatus] = useState<string>('');
  const [species, setSpecies] = useState<string>('');

  const { data, page, pages, searchValue, cardsCount, isLoading, error, sortValue } =
    useAppSelector((state) => state.mainReducer);
  const { SEARCH, SELECT_COUNT_CARDS, SET_PAGE, SET_SORT } = mainSlice.actions;
  const dispatch = useAppDispatch();

  const onSelect = async (value: string) => {
    dispatch(SELECT_COUNT_CARDS(value));
  };

  const reset = () => {
    dispatch(SET_PAGE(1));
    dispatch(SEARCH(''));
    setStatus('');
    setSpecies('');
    dispatch(SET_SORT(''));
  };
  useEffect(() => {
    const query = `page=${page}&name=${searchValue}&status=${status}&species=${species}`;
    dispatch(fetchCharacters({ query, cardsCount, sortValue }));
  }, [cardsCount, dispatch, page, searchValue, sortValue, species, status]);

  return (
    <div className="mainPage" data-testid="main-page">
      <h2 className="mainPage-title">Rick and Morty</h2>
      <div className="search-block">
        <Search />
        <button className="reset-btn" onClick={reset}>
          reset
        </button>
        {error && <span className="mainPage-error">not found</span>}
      </div>
      <Pagination
        cardsCount={cardsCount}
        page={page}
        pages={pages.toString()}
        onSelect={onSelect}
      />
      {isLoading ? (
        <div className="loader">
          <Loader />
        </div>
      ) : (
        <CardsField searchData={data} />
      )}
    </div>
  );
};
