import React from 'react';
import { IFormCard } from '../../Form/Form';
import './FormCard.css';

export class FormCard extends React.Component<IFormCard> {
  constructor(props: IFormCard) {
    super(props);
  }
  render() {
    const { name, surname, birth, country, gender, photo } = this.props;
    const reader = new FileReader();
    let src;
    let url;
    if (photo) {
      url = URL.createObjectURL(photo[0]);
    }
    reader.onloadend = (e) => {
      src = reader.result;
    };
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
          <div className="card--description-item">Gender: {gender}</div>
        </div>
      </div>
    );
  }
}
