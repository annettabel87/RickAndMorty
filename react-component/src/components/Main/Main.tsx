import React, { FC, useEffect, useState } from 'react';
import { Search } from './Search/Search';
import { CardsField } from './Cards/CardsField';
import { apiConstants } from '../../constants';
import { Loader } from './Loader/Loader';
import { useGlobalMainContext } from '../state/context';
import { MainStateKind } from '../state/reducer';
import './Main.css';
import { Pagination } from './Pagination/Pagination';

export interface ISearchProps {
  searchValue: string;
  onSubmit: (e: React.ChangeEvent<HTMLFormElement>, value: string) => void;
}
interface SearchParameters {
  page: number;
  name?: string;
  status?: string;
  species?: string;
  cardsCount: string;
}
export const Main: FC = () => {
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');
  const [pages, setPages] = useState('');
  const { state, searchValue, cardsCount, page, dispatch } = useGlobalMainContext();

  const fetchData = React.useCallback(
    async ({ page = 1, name, status, species, cardsCount }: SearchParameters) => {
      const query = `page=${page}&name=${name}&status=${status}&species=${species}`;
      setError(false);
      try {
        const response = await fetch(`${apiConstants.characterUrl}?${query}`);
        const data = await response.json();
        if (!response.ok) {
          throw Error('not found');
        }
        if (cardsCount === '40') {
          fetch(data.info.next)
            .then((res) => res.json())
            .then((nextData) => {
              dispatch({
                type: MainStateKind.ADD,
                payload: [...data.results, ...nextData.results],
              });
            });
        } else if (cardsCount === '20') {
          dispatch({ type: MainStateKind.ADD, payload: data.results });
        } else if (cardsCount === '60') {
          fetch(data.info.next)
            .then((res) => res.json())
            .then((nextData) => {
              fetch(nextData.info.next)
                .then((res) => res.json())
                .then((nextNextData) => {
                  dispatch({
                    type: MainStateKind.ADD,
                    payload: [...data.results, ...nextData.results, ...nextNextData.results],
                  });
                });
            });
        }
        setPages(data.info.pages);
      } catch (err) {
        setError(true);
      } finally {
        setIsLoaded(false);
      }
    },
    [dispatch]
  );
  const onSelect = async (value: string) => {
    dispatch({ type: MainStateKind.SELECT_COUNT_CARDS, payload: value });
  };
  const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>, value: string) => {
    setError(false);
    e.preventDefault();
    setIsLoaded(true);
    dispatch({ type: MainStateKind.SEARCH, payload: value });
  };
  const reset = () => {
    dispatch({ type: MainStateKind.SET_PAGE, payload: 1 });
    dispatch({ type: MainStateKind.SEARCH, payload: '' });
    setStatus('');
    setSpecies('');
  };
  useEffect(() => {
    fetchData({
      page,
      name: searchValue,
      status,
      species,
      cardsCount,
    });
  }, [searchValue, page, cardsCount, dispatch]);

  return (
    <div className="mainPage" data-testid="main-page">
      <h2 className="mainPage-title">Rick and Morty</h2>
      <div className="search-block">
        <Search searchValue={searchValue} onSubmit={onSubmit} />
        <button className="reset-btn" onClick={reset}>
          reset
        </button>
        {error && <span className="mainPage-error">not found</span>}
      </div>
      <Pagination
        cardsCount={cardsCount}
        page={page}
        pages={pages}
        onSelect={onSelect}
        dispatch={dispatch}
      />
      {isLoaded ? (
        <div className="loader">
          <Loader />
        </div>
      ) : (
        <CardsField searchData={state} />
      )}
    </div>
  );
};
