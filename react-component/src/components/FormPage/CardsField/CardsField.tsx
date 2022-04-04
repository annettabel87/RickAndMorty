import React from 'react';
import { IFormCard } from '../Form/Form';
import { FormCard } from './Card/FormCard';
import './CardsField.css';

export class CardsField extends React.Component<IFormCard[]> {
  constructor(props: IFormCard[]) {
    super(props);
  }

  render() {
    const cardData = Array.from(Object.values(this.props));
    const elements = cardData.map((data: IFormCard) => <FormCard key={data.id} {...data} />);
    return <div className="cardsField">{elements}</div>;
  }
}
