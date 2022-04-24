import React, { FC, useEffect, useState } from 'react';
import { Search } from './Search/Search';
import { CardsField } from './Cards/CardsField';
import { apiConstants } from '../../constants';
import { Loader } from './Loader/Loader';
import { useGlobalMainContext } from '../state/context';
import { MainStateKind } from '../state/reducer';
import './Main.css';

export interface ISearchProps {
  searchValue: string;
  onSubmit: (e: React.ChangeEvent<HTMLFormElement>, value: string) => void;
}
interface SearchParameters {
  page: number;
  name?: string;
  status?: string;
  species?: string;
}
export const Main: FC = () => {
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');
  const { state, searchValue, dispatch } = useGlobalMainContext();

  const fetchData = async ({ page = 1, name, status, species }: SearchParameters) => {
    const query = `page=${page}&name=${name}&status=${status}&species=${species}`;
    setError(false);
    try {
      const response = await fetch(`${apiConstants.characterUrl}?${query}`);
      const data = await response.json();
      if (!response.ok) {
        throw Error('not found');
      }
      dispatch({ type: MainStateKind.ADD, payload: data.results });
    } catch (err) {
      setError(true);
    } finally {
      setIsLoaded(false);
    }
  };

  const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>, value: string) => {
    setError(false);
    e.preventDefault();
    setIsLoaded(true);
    dispatch({ type: MainStateKind.SEARCH, payload: value });
  };
  const reset = () => {
    setPage(1);
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
    });
  }, [searchValue]);

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
