import React from 'react';
import { IRickAndMortyData } from '../Main';
import { Card } from './Card/Card';
import { FullCard } from './FullCard/FullCard';
import { Modal } from './Modal/Modal';
import './CardsField.css';

interface ICardFieladState {
  isOpen: boolean;
  idCard: number;
}
export class CardsField extends React.Component<IRickAndMortyData[], ICardFieladState> {
  constructor(props: IRickAndMortyData[]) {
    super(props);
    this.state = {
      isOpen: false,
      idCard: -1,
    };
    this.onClosed = this.onClosed.bind(this);
    this.onOpen = this.onOpen.bind(this);
  }
  onClosed() {
    this.setState({ isOpen: false });
  }
  onOpen(e: React.SyntheticEvent<EventTarget>) {
    if (!(e.target instanceof HTMLElement)) {
      return;
    }
    const { id } = e.target.dataset;
    if (id) {
      this.setState({ idCard: Number(id) });
      this.setState({ isOpen: true });
    }
  }
  render() {
    const elements = Array.from(Object.values(this.props)).map((data: IRickAndMortyData) => (
      <Card key={data.id} data={data} open={this.onOpen} />
    ));
    const id = Array.from(Object.values(this.props)).map((item) => item.id).findIndex((id) => id === this.state.idCard);
    return (
      <div>
        <div className="cardsPage" onClick={this.onOpen}>
          {elements}
        </div>

        <Modal onClose={this.onClosed} open={this.state.isOpen}>
          <FullCard data={Array.from(Object.values(this.props))[id]} onClose={this.onClosed} />
        </Modal>
      </div>
    );
  }
}
