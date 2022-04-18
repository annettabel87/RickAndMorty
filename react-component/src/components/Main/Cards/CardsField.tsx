import React, { FC, useState } from 'react';
import { Card } from './Card/Card';
import { FullCard } from './FullCard/FullCard';
import { Modal } from './Modal/Modal';
import './CardsField.css';

export interface IRickAndMortyData {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}
type CardFieldProps = {
  searchData: IRickAndMortyData[];
  reset: () => void;
};

export const CardsField: FC<CardFieldProps> = (data: CardFieldProps) => {
  const [selectedValue, setSelectedValue] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);

  const onClosed = () => {
    setIsOpen(false);
  };
  const onOpen = (e: React.SyntheticEvent<EventTarget>) => {
    if (!(e.target instanceof HTMLElement)) {
      return;
    }
    const { id } = e.target.dataset;
    if (id) {
      setSelectedValue(Number(id));
      setIsOpen(true);
    }
  };

  const elements = data.searchData.map((data: IRickAndMortyData) => (
    <Card key={data.id} data={data} open={onOpen} />
  ));
  const id = data.searchData.map((item) => item.id).findIndex((id) => id === selectedValue);
  return (
    <div>
      <div className="cardsPage" onClick={onOpen}>
        {elements}
      </div>

      <Modal onClose={onClosed} open={isOpen}>
        <FullCard data={data.searchData[id]} onClose={onClosed} />
      </Modal>
    </div>
  );
};