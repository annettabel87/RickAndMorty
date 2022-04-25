import { IRickAndMortyData } from '../Main/Cards/CardsField';

type mainStateType = {
  data: IRickAndMortyData[];
  searchValue: string;
  cardsCount: string;
  page: number;
};
export const mainState: mainStateType = {
  data: [],
  searchValue: '',
  cardsCount: '20',
  page: 1,
};
export enum MainStateKind {
  ADD = 'Add_search_data',
  DELETE = 'Delete_search_data',
  SEARCH = 'Search_value',
  SELECT_COUNT_CARDS = 'Select_count_cards',
  SET_PAGE = 'Next_page',
}

export interface MainStateAction {
  type: MainStateKind;
  payload: IRickAndMortyData[] | string | number;
}
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
    default:
      return state;
  }
};
