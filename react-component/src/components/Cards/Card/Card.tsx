import React from 'react';
import { ICardData } from '../Cards';
import './Card.css';

export class Card extends React.Component<ICardData> {
  constructor(props: ICardData) {
    super(props);
  }
  render() {
    const { id, name, price, age, details } = this.props;
    return (
      <div className="card" data-testid="card">
        <div className="card--img-wrapper">
          <img
            className="card-img"
            src={require(`../../../assets/cardsImg/${id}.jpg`)}
            alt="image"
          />
        </div>
        <div className="card--description-wrapper">
          <div className="card--description-item">#{id}</div>
          <div className="card--description-item">{name}</div>
          <div className="card--description-item">Details: {details}</div>
          <div className="card--description-item">Age: {age}</div>
          <div className="card--description-item price">Price: {price}</div>
        </div>
      </div>
    );
  }
}
