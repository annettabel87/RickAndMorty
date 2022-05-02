import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiConstants, valueToSort } from '../../constants';
import { IRickAndMortyData } from '../Main/Cards/CardsField';
import { IFetchData, mainSlice } from './mainReducer';

export type fetchCharactersPropsType = {
  query: string;
  cardsCount: string;
  sortValue: string;
};

const sort = (array: IRickAndMortyData[], value: string) => {
  const copyArray = [...array];
  switch (value) {
    case valueToSort.NAME:
      return copyArray.sort((a, b) => (a.name > b.name ? 1 : -1));
    case valueToSort.NAME_REVERSE:
      return copyArray.sort((a, b) => (a.name > b.name ? -1 : 1));
    case valueToSort.GENDER:
      return copyArray.sort((a, b) => (a.gender > b.gender ? 1 : -1));
    case valueToSort.GENDER_REVERSE:
      return copyArray.sort((a, b) => (a.gender > b.gender ? -1 : 1));
    default:
      return array;
  }
};
export const fetchCharacters = createAsyncThunk(
  'main/fetch',
  async ({ query, cardsCount, sortValue }: fetchCharactersPropsType, { dispatch }) => {
    try {
      dispatch(mainSlice.actions.DATA_FETCHING());
      const response = await fetch(`${apiConstants.characterUrl}?${query}`);
      const data: IFetchData = await response.json();
      if (cardsCount === '20') {
        dispatch(mainSlice.actions.DATA_FETCHING_SUCCESS(sort(data.results, sortValue)));
      } else if (cardsCount === '40') {
        fetch(data.info.next)
          .then((res) => res.json())
          .then((nextData) => {
            dispatch(
              mainSlice.actions.DATA_FETCHING_SUCCESS(
                sort([...data.results, ...nextData.results], sortValue)
              )
            );
          });
      } else if (cardsCount === '60') {
        fetch(data.info.next)
          .then((res) => res.json())
          .then((nextData) => {
            fetch(nextData.info.next)
              .then((res) => res.json())
              .then((nextNextData) => {
                dispatch(
                  mainSlice.actions.DATA_FETCHING_SUCCESS(
                    sort([...data.results, ...nextData.results, ...nextNextData.results], sortValue)
                  )
                );
              });
          });
      }
      dispatch(mainSlice.actions.SET_PAGES(data.info.pages));
    } catch (e: unknown) {
      dispatch(mainSlice.actions.DATA_FETCHING_ERROR('not found'));
    }
  }
);
