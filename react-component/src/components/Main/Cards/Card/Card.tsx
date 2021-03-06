import React, { FC, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { routers } from '../../../../constants';
import { IRickAndMortyData, RootState } from '../../../../type/type';
import { useAppSelector } from '../../../store/hooks';
import './Card.css';

export const Card: FC<IRickAndMortyData> = React.memo((data: IRickAndMortyData) => {
  const { id, image, name, status } = data;
  const { selectCard } = useAppSelector((state: RootState) => state.mainReducer);
  const navigate = useNavigate();
  useEffect(() => {
    if (!selectCard) {
      navigate(routers.ROUTE_MAIN);
    }
  }, [navigate, selectCard]);
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
});
