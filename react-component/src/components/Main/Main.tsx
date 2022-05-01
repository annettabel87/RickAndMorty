import React, { FC, useCallback, useEffect, useState } from 'react';
import { Search } from './Search/Search';
import { CardsField } from './Cards/CardsField';
import { apiConstants } from '../../constants';
import { Loader } from './Loader/Loader';
import { useGlobalMainContext } from '../store/context';
import { MainStateKind } from '../store/reducer';
import { Pagination } from './Pagination/Pagination';
import './Main.css';

export interface ISearchProps {
  searchValue: string;
  onSubmit: (e: React.ChangeEvent<HTMLFormElement>, value: string) => void;
  sortValue: string;
  setSortValue: React.Dispatch<React.SetStateAction<string>>;
}
interface SearchParameters {
  page: number;
  name?: string;
  status?: string;
  species?: string;
  cardsCount: string;
}
export const Main: FC = () => {
  const [error, setError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [status, setStatus] = useState<string>('');
  const [species, setSpecies] = useState<string>('');
  const [pages, setPages] = useState<string>('');
  const [sortValue, setSortValue] = useState<string>('default');
  const { state, searchValue, cardsCount, page, dispatch } = useGlobalMainContext();

  const fetchData = useCallback(
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
  const onSubmit = useCallback(
    async (e: React.ChangeEvent<HTMLFormElement>, value: string) => {
      setError(false);
      e.preventDefault();
      setIsLoaded(true);
      dispatch({ type: MainStateKind.SEARCH, payload: value });
    },
    [dispatch]
  );
  useEffect(() => {
    dispatch({ type: MainStateKind.SORT, payload: sortValue });
  }, [dispatch, sortValue]);
  const reset = () => {
    dispatch({ type: MainStateKind.SET_PAGE, payload: 1 });
    dispatch({ type: MainStateKind.SEARCH, payload: '' });
    setStatus('');
    setSpecies('');
    setSortValue('');
  };
  useEffect(() => {
    fetchData({
      page,
      name: searchValue,
      status,
      species,
      cardsCount,
    });
  }, [searchValue, page, cardsCount, dispatch, fetchData, status, species]);

  return (
    <div className="mainPage" data-testid="main-page">
      <h2 className="mainPage-title">Rick and Morty</h2>
      <div className="search-block">
        <Search
          searchValue={searchValue}
          onSubmit={onSubmit}
          sortValue={sortValue}
          setSortValue={setSortValue}
        />
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
