import React, { FC } from 'react';
import { IFormCard } from '../../Form/Form';
import './FormCard.css';

export const FormCard: FC<IFormCard> = ({
  name,
  surname,
  birth,
  country,
  gender,
  photo,
}: IFormCard) => {
  let url;
  if (photo) {
    const photoFile = new Blob([photo[0]]);
    url = URL.createObjectURL(photoFile);
  }
  return (
    <div className="card" data-testid="formCard">
      <div className="card--img-wrapper">
        <img className="card-img" src={url} alt="image" />/
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
