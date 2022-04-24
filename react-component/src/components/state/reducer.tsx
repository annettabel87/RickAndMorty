import { IRickAndMortyData } from '../Main/Cards/CardsField';

type mainStateType = {
  data: IRickAndMortyData[];
  searchValue: string;
};
export const mainState: mainStateType = {
  data: [],
  searchValue: '',
};
export enum MainStateKind {
  ADD = 'Add_search_data',
  DELETE = 'Delete_search_data',
  SEARCH = 'Search_value',
}

export interface MainStateAction {
  type: MainStateKind;
  payload: IRickAndMortyData[] | string;
}
export const mainReducer = (state: mainStateType, action: MainStateAction) => {
  const { type, payload } = action;
  switch (type) {
    case MainStateKind.ADD:
      return typeof payload !== 'string' ? { ...state, data: payload } : state;
    case MainStateKind.SEARCH:
      return typeof payload === 'string' ? { ...state, searchValue: payload } : state;
    default:
      return state;
  }
};
