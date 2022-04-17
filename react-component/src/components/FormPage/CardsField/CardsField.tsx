import React, { FC } from 'react';
import { IFormCard } from '../Form/Form';
import { FormCard } from './Card/FormCard';
import './CardsField.css';

export const CardsField: FC<IFormCard[]> = (data: IFormCard[]) => {
  const cardData = Array.from(Object.values(data));
  const elements = cardData.map((itemData: IFormCard) => (
    <FormCard key={itemData.id} {...itemData} />
  ));
  return (
    <div className="cardsField" data-testid="cardField">
      {elements}
    </div>
  );
};
