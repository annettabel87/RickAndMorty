import { FC, useCallback } from 'react';
import { Form } from './Form/Form';
import { CardsField } from './CardsField/CardsField';
import { formSlice } from '../store/formReducer';
import { IFormCard, AppDispatch, RootState } from '../../type/type';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import './FormPage.css';

export const FormPage: FC = () => {
  const formData = useAppSelector((state: RootState) => state.formReducer.data);
  const { ADD_CARD } = formSlice.actions;
  const dispatch: AppDispatch = useAppDispatch();

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
