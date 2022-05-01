import { FC, useCallback } from 'react';
import { Form, IFormCard } from './Form/Form';
import { CardsField } from './CardsField/CardsField';
import { formSlice } from '../store/formReducer';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import './FormPage.css';

export type EmptyProps = Record<string, never>;

export interface IAddCardData {
  addCardData: (data: IFormCard) => void;
}
export type State = {
  cardData: IFormCard[];
};

export const FormPage: FC = () => {
  const formData = useSelector((state: RootState) => state.formReducer.data);
  const { ADD_CARD } = formSlice.actions;
  const dispatch: AppDispatch = useDispatch();

  const onAddCardData = useCallback(
    (data: IFormCard) => {
      dispatch(ADD_CARD(data));
    },
    [ADD_CARD, dispatch]
  );

  return (
    <div className="form-container" data-testid="form-page">
      <Form addCardData={onAddCardData} />
      <CardsField {...formData} />
    </div>
  );
};
