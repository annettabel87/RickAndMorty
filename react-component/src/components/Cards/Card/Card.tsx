import React from 'react';
import './Card.css';
import { ICardData } from '../Cards';

export class Card extends React.Component<ICardData> {
  constructor(props: ICardData) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <div className="card--img-wrapper">
          <img
            className="card-img"
            src={require(`../../../assets/cardsImg/${this.props.id}.jpg`)}
            alt="image"
          />
        </div>
        <div className="card--description-wrapper">
          <div className="card--description-item">#{this.props.id}</div>
          <div className="card--description-item">Age: {this.props.name}</div>
          <div className="card--description-item">Details: {this.props.details}</div>
          <div className="card--description-item">Age: {this.props.age}</div>
          <div className="card--description-item price">Price: {this.props.price}</div>
        </div>
      </div>
    );
  }
}
