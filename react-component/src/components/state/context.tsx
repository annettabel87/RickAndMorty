import { createContext, useContext } from 'react';
import { IRickAndMortyData } from '../Main/Cards/CardsField';
import { mainState, MainStateAction } from './reducer';

export type mainContextType = {
  state: IRickAndMortyData[];
  searchValue: string;
  cardsCount: string;
  page: number;
  dispatch: React.Dispatch<MainStateAction>;
};

const contextState: mainContextType = {
  state: mainState.data,
  searchValue: mainState.searchValue,
  cardsCount: mainState.cardsCount,
  page: mainState.page,
  dispatch: () => null,
};

export const GlobalMainContext = createContext<mainContextType>(contextState);
export const useGlobalMainContext = () => useContext(GlobalMainContext);
