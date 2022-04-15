import React, { FC } from 'react';
import { ICardData } from '../Cards';
import './Card.css';

export const Card: FC<ICardData> = (data: ICardData) => {
  return (
    <div className="card" data-testid="card">
      <div className="card--img-wrapper">
        <img
          className="card-img"
          src={require(`../../../assets/cardsImg/${data.id}.jpg`)}
          alt="image"
        />
      </div>
      <div className="card--description-wrapper">
        <div className="card--description-item">#{data.id}</div>
        <div className="card--description-item">{data.name}</div>
        <div className="card--description-item">Details: {data.details}</div>
        <div className="card--description-item">Age: {data.age}</div>
        <div className="card--description-item price">Price: {data.price}</div>
      </div>
    </div>
  );
};
