import React from 'react';
import { IRickAndMortyData } from '../../Main';
import './Card.css';

export class Card extends React.Component<IRickAndMortyData> {
  constructor(props: IRickAndMortyData) {
    super(props);
  }
  render() {
    const { name, status, image } = this.props;
    return (
      <div className="main-card" data-testid="card">
        <div className="main-card--img-wrapper">
          <img className="main-card-img" src={image} alt="image" />
        </div>
        <div className="carmain-cardd--description-wrapper">
          <div className="main-card--description-item main-card--name">Name: {name}</div>
          <div className="main-card--description-item">Status: {status}</div>
        </div>
      </div>
    );
  }
}
