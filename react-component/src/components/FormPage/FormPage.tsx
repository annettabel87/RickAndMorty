import { FC, useCallback } from 'react';
import { Form, IFormCard } from './Form/Form';
import { CardsField } from './CardsField/CardsField';
import { useGlobalFormContext } from '../state/formContext';
import { ADD_CARD } from '../state/formReducer';
import './FormPage.css';

export type EmptyProps = Record<string, never>;

export interface IAddCardData {
  addCardData: (data: IFormCard) => void;
}
export type State = {
  cardData: IFormCard[];
};

export const FormPage: FC = () => {
  const { formstate, formDispatch } = useGlobalFormContext();

  const onAddCardData = useCallback(
    (data: IFormCard) => {
      formDispatch({ type: ADD_CARD, payload: data });
    },
    [formDispatch]
  );

  return (
    <div className="form-container" data-testid="form-page">
      <Form addCardData={onAddCardData} />
      <CardsField {...formstate} />
    </div>
  );
};
