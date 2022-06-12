import React, { FC } from 'react';
import { IFormCard } from '../../../type/type';
import { FormCard } from './Card/FormCard';
import './CardsField.css';

export const CardsField: FC<IFormCard[]> = (props: IFormCard[]) => {
  const cardData = Array.from(Object.values(props));

  const elements = cardData.map((itemData: IFormCard) => (
    <FormCard key={itemData.id} {...itemData} />
  ));
  return (
    <div className="cardsField" data-testid="cardField">
      {elements}
    </div>
  );
};
