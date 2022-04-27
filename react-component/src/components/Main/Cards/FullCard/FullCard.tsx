import React, { FC } from 'react';
import { IRickAndMortyData } from '../CardsField';
import './FullCard.css';

interface IFullCardProps {
  props: IRickAndMortyData;
  onClose: () => void;
}
export const FullCard: FC<IFullCardProps> = React.memo(({ props, onClose }: IFullCardProps) => {
  const { id, name, status, image, species, gender, created } = props;

  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="main-fullcard"
        data-testid="fullcard"
        data-id={id}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button className="close" onClick={onClose} data-testid="close-btn" />
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
    </div>
  );
});
