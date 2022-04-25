import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { routers } from '../../../../constants';
import { useGlobalMainContext } from '../../../state/context';
import { IRickAndMortyData } from '../CardsField';
import './Card.css';

export const Card: FC<IRickAndMortyData> = (data: IRickAndMortyData) => {
  const { id, image, name, status } = data;
  const { selectCard } = useGlobalMainContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!selectCard) {
      navigate(routers.ROUTE_MAIN);
    }
  });
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
        className="card-btn"
        data-id={id}
        onClick={() => {
          navigate(routers.ROUTE_FULLCARD);
        }}
      >
        more
      </button>
    </div>
  );
};
