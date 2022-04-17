import React, { FC } from 'react';
import { IFormCard } from '../../Form/Form';
import './FormCard.css';

export const FormCard: FC<IFormCard> = (data: IFormCard) => {
  const reader = new FileReader();
  let url;
  if (data.photo) {
    url = URL.createObjectURL(new Blob([data.photo[0]]));
  }
  return (
    <div className="card" data-testid="formCard">
      <div className="card--img-wrapper">
        <img className="card-img" src={url} alt="image" />/
      </div>
      <div className="card--description-wrapper">
        <div className="card--description-item">
          {data.name} {data.surname}
        </div>
        <div className="card--description-item">Birth: {data.birth}</div>
        <div className="card--description-item">Country: {data.country}</div>
        <div className="card--description-item">Gender: {data.gender ? 'Female' : 'Male'}</div>
      </div>
    </div>
  );
};
