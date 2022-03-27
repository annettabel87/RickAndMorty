import React, { ReactComponentElement, ReactElement, ReactText } from 'react';
import cardsData from '../../cardsData.json';
import { Card } from './Card/Card';
import './Cards.css';

export interface ICardData {
  id: number;
  name: string;
  price: number;
  age: string;
  details: number;
}
export class Cards extends React.Component {
  cardsElement = cardsData.map((data: ICardData) => <Card key={data.id.toString()} {...data} />);

  render() {
    return <div className="cardsPage">{this.cardsElement}</div>;
  }
}
