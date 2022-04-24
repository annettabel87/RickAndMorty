import React, { FC } from 'react';
import { IRickAndMortyData } from '../CardsField';
import './Card.css';

interface ICardProp {
  data: IRickAndMortyData;
  open: (e: React.SyntheticEvent<EventTarget>) => void;
}
export const Card: FC<ICardProp> = ({ data, open }: ICardProp) => {
  const { id, image, name, status } = data;
  return (
    <div className="main-card" data-testid="card" data-id={id}>
      <div className="main-card--img-wrapper">
        <img className="main-card-img" src={image} alt="image" />
      </div>
      <div className="carmain-cardd--description-wrapper">
        <div className="main-card--description-item main-card--name">Name: {name}</div>
        <div className="main-card--description-item">Status: {status}</div>
      </div>
      <button className="main-card--btn" data-testid="card-btn" data-id={id} onClick={open}>
        more
      </button>
    </div>
  );
};
