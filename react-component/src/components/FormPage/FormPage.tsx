import React from 'react';
import { Form, IFormCard } from './Form/Form';
import { CardsField } from './CardsField/CardsField';
import './FormPage.css';

export type EmptyProps = Record<string, never>;

export interface IAddCardData {
  addCardData: (data: IFormCard) => void;
}
export type State = {
  cardData: IFormCard[];
};
export class FormPage extends React.Component<EmptyProps, State> {
  constructor(props: EmptyProps) {
    super(props);
    this.state = {
      cardData: [],
    };
    this.onAddCardData = this.onAddCardData.bind(this);
  }

  onAddCardData(data: IFormCard) {
    this.setState({ cardData: [...this.state.cardData, data] });
  }

  render() {
    return (
      <div className="form-container" data-testid="form-page">
        <Form addCardData={this.onAddCardData} />
        <CardsField {...this.state.cardData} />
      </div>
    );
  }
}
