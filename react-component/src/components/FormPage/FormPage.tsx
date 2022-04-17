import React, { FC, useState } from 'react';
import { Form, IFormCard } from './Form/Form';
import { CardsField } from './CardsField/CardsField';
import './FormPage.css';

export type EmptyProps = Record<string, never>;

export interface IAddCardData {
  addCardData: (data: IFormCard) => void;
}
export type State = {
  cardData: IFormCard[];
};

export const FormPage: FC = () => {
  const [cardData, setCardData] = useState<IFormCard[]>([]);

  const onAddCardData = (data: IFormCard) => {
    setCardData([...cardData, data]);
  };

  return (
    <div className="form-container" data-testid="form-page">
      <Form addCardData={onAddCardData} />
      <CardsField {...cardData} />
    </div>
  );
};
