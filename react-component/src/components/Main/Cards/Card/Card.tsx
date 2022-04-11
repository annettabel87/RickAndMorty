import React from 'react';
import { IRickAndMortyData } from '../../Main';
import './Card.css';

interface ICardProp {
  data: IRickAndMortyData;
  open: (e: React.SyntheticEvent<EventTarget>) => void;
}
export class Card extends React.Component<ICardProp> {
  constructor(props: ICardProp) {
    super(props);
  }

  render() {
    const { id, name, status, image } = this.props.data;
    return (
      <div className="main-card" data-testid="card" data-id={id}>
        <div className="main-card--img-wrapper">
          <img className="main-card-img" src={image} alt="image" />
        </div>
        <div className="carmain-cardd--description-wrapper">
          <div className="main-card--description-item main-card--name">Name: {name}</div>
          <div className="main-card--description-item">Status: {status}</div>
        </div>
        <button
          className="main-card--btn"
          data-testid="card-btn"
          data-id={id}
          onClick={this.props.open}
        >
          more
        </button>
      </div>
    );
  }
}
