import React, { FC } from 'react';
import { IFormCard } from '../../../../type/type';
import './FormCard.css';

export const FormCard: FC<IFormCard> = ({
  name,
  surname,
  birth,
  country,
  gender,
  photo,
}: IFormCard) => {
  return (
    <div className="card" data-testid="formCard">
      <div className="card--img-wrapper">
        <img className="card-img" src={photo} alt="image" />/
      </div>
      <div className="card--description-wrapper">
        <div className="card--description-item">
          {name} {surname}
        </div>
        <div className="card--description-item">Birth: {birth}</div>
        <div className="card--description-item">Country: {country}</div>
        <div className="card--description-item">Gender: {gender ? 'Female' : 'Male'}</div>
      </div>
    </div>
  );
};
