import React from 'react';
import { IRickAndMortyData } from '../Main';
import { Card } from './Card/Card';
import './CardsField.css';

export class CardsField extends React.Component<IRickAndMortyData[]> {
  constructor(props: IRickAndMortyData[]) {
    super(props);
  }
  render() {
    const cardData = Array.from(Object.values(this.props));
    const elements = cardData.map((data: IRickAndMortyData) => <Card key={data.id} {...data} />);

    return (
      <div>
        <div className="cardsPage">{elements}</div>;
      </div>
    );
  }
}
