import React, { FC } from 'react';
import cardsData from '../../cardsData.json';
import { ICardData } from '../../type/type';
import { Card } from './Card/Card';
import './Cards.css';

const cardsElement = cardsData.map((data: ICardData) => (
  <Card key={data.id.toString()} {...data} />
));
export const Cards: FC = () => {
  return (
    <div>
      <h2 className="cardsPage-title">Lego</h2>
      <div className="cardsPage">{cardsElement}</div>;
    </div>
  );
};
