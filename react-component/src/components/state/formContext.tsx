import { createContext, useContext } from 'react';
import { IFormCard } from '../FormPage/Form/Form';
import { formState, FormStateAction } from './formReducer';

export type formContextType = {
  formstate: IFormCard[];
  formDispatch: React.Dispatch<FormStateAction>;
};

const formContextState: formContextType = {
  formstate: formState.data,
  formDispatch: () => null,
};

export const GlobalFormContext = createContext<formContextType>(formContextState);
export const useGlobalFormContext = () => useContext(GlobalFormContext);
