import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { Search } from './Search/Search';
import { CardsField, IRickAndMortyData } from './Cards/CardsField';
import { apiConstants } from '../../constants';
import { Loader } from './Loader/Loader';
import './Main.css';

export interface ISearchProps {
  searchValue: string;
  onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const Main: FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchData, setSearchData] = useState<IRickAndMortyData[]>([]);
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchData = async () => {
    setError(false);
    try {
      const response = await fetch(apiConstants.characterUrl);
      const data = await response.json();
      if (!response.ok) {
        throw Error('not found');
      }
      setSearchData(data.results);
    } catch (err) {
      setError(true);
    } finally {
      setIsLoaded(false);
    }
  };

  const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    setError(false);
    e.preventDefault();
    setIsLoaded(true);
    try {
      const response = await fetch(`${apiConstants.characterUrl}/?name=${searchValue}`);
      const data = await response.json();
      if (!response.ok) {
        throw Error('not found');
      }
      setSearchData(data.results);
    } catch (err) {
      setError(true);
    } finally {
      setIsLoaded(false);
      setSearchValue('');
    }
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value.toLowerCase());
  };
  const reset = () => {
    setSearchValue('');
    fetchData();
    localStorage.clear();
  };
  useEffect(() => {
    const oldSearchValue = localStorage.getItem('inputValue');
    if (oldSearchValue) {
      setSearchValue(oldSearchValue);
    }
    return () => {
      localStorage.setItem('inputValue', searchValue);
    };
  }, [searchValue]);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="mainPage" data-testid="main-page">
      <h2 className="mainPage-title">Rick and Morty</h2>
      <div className="search-block">
        <Search searchValue={searchValue} onSubmit={onSubmit} handleChange={handleChange} />
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
        <CardsField searchData={searchData} reset={reset} />
      )}
    </div>
  );
};
