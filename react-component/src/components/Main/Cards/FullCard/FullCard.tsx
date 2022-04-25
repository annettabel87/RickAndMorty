import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalMainContext } from '../../../state/context';
import './FullCard.css';

export const FullCard: FC = React.memo(() => {
  const { selectCard } = useGlobalMainContext();
  const { name, status, image, species, gender, created } = selectCard;
  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1);
  };
  return (
    <>
      <button className="card-btn" data-testid="back-btn" onClick={onBack}>
        back
      </button>
      <div className="main-fullcard" data-testid="fullcard">
        <div className="main-fullcard--img-wrapper">
          <img className="main-fullcard-img" src={image} alt="image" />
        </div>
        <div className="main-fullcard--description-wrapper">
          <div className="main-fullcard--description-item main-fullcard--name">Name: {name}</div>
          <div className="main-fullcard--description-item">Status: {status}</div>
          <div className="main-fullcard--description-item">Gender: {gender}</div>
          <div className="main-fullcard--description-item">Species: {species}</div>
          <div className="main-fullcard--description-item">Created: {created}</div>
        </div>
      </div>
    </>
  );
});
