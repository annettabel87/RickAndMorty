import React from 'react';
import { IRickAndMortyData } from '../../Main';
import './FullCard.css';

interface IFullCardProps {
  data: IRickAndMortyData;
  onClose: () => void;
}
export class FullCard extends React.Component<IFullCardProps> {
  constructor(props: IFullCardProps) {
    super(props);
  }

  render() {
    const { id, name, status, image, species, gender, created } = this.props.data;
    return (
      <div className="overlay" onClick={this.props.onClose}>
        <div
          className="main-fullcard"
          data-testid="fullcard"
          data-id={id}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <button className="close" onClick={this.props.onClose} />
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
  }
}
