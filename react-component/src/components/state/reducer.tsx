import { valueToSort } from '../../constants';
import { IRickAndMortyData } from '../Main/Cards/CardsField';

type mainStateType = {
  data: IRickAndMortyData[];
  searchValue: string;
  cardsCount: string;
  page: number;
  selectCard: IRickAndMortyData;
};
export const mainState: mainStateType = {
  data: [],
  searchValue: '',
  cardsCount: '20',
  page: 1,
  selectCard: {
    id: 0,
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: {
      name: '',
      url: '',
    },
    location: {
      name: '',
      url: '',
    },
    image: '',
    episode: [],
    url: '',
    created: '',
  },
};
export enum MainStateKind {
  ADD = 'Add_search_data',
  DELETE = 'Delete_search_data',
  SEARCH = 'Search_value',
  SELECT_COUNT_CARDS = 'Select_count_cards',
  SET_PAGE = 'Next_page',
  SORT = 'Sort',
  SELECT_CARD = 'Select_card',
}

export interface MainStateAction {
  type: MainStateKind;
  payload: IRickAndMortyData[] | string | number | IRickAndMortyData;
}

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
export const mainReducer = (state: mainStateType, action: MainStateAction) => {
  const { type, payload } = action;
  switch (type) {
    case MainStateKind.ADD:
      return Array.isArray(payload) ? { ...state, data: payload } : state;
    case MainStateKind.SEARCH:
      return typeof payload === 'string' ? { ...state, searchValue: payload } : state;
    case MainStateKind.SELECT_COUNT_CARDS:
      return typeof payload === 'string' ? { ...state, cardsCount: payload } : state;
    case MainStateKind.SET_PAGE:
      return typeof payload === 'number' ? { ...state, page: payload } : state;
    case MainStateKind.SELECT_CARD:
      return typeof payload === 'object' && !Array.isArray(payload)
        ? { ...state, selectCard: payload }
        : state;
    case MainStateKind.SORT:
      return typeof payload === 'string'
        ? {
            ...state,
            data: sort(state.data, payload),
          }
        : state;
    default:
      return state;
  }
};
