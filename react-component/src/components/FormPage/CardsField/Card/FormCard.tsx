import React from 'react';
import { IFormCard } from '../../Form/Form';
import './FormCard.css';

export class FormCard extends React.Component<IFormCard> {
  constructor(props: IFormCard) {
    super(props);
    console.log(this.props.name);
  }
  render() {
    console.log(this.props.name);
    const { name, surname, birth, country, gender, foto } = this.props;
    const reader = new FileReader();
    let src;
    let url;
    if (foto) {
      url = URL.createObjectURL(foto[0]);
    }
    reader.onloadend = (e) => {
      src = reader.result;
      console.log(src);
    };
    return (
      <div className="card">
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
