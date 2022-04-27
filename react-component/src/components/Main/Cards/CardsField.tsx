import React, { FC, useCallback, useState } from 'react';
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
};

export const CardsField: FC<CardFieldProps> = React.memo(({ searchData }: CardFieldProps) => {
  const [selectedValue, setSelectedValue] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);

  const onClosed = useCallback(() => {
    setIsOpen(false);
  }, []);
  const onOpen = useCallback((e: React.SyntheticEvent<EventTarget>) => {
    if (!(e.target instanceof HTMLElement)) {
      return;
    }
    const { id } = e.target.dataset;
    if (id) {
      setSelectedValue(Number(id));
      setIsOpen(true);
    }
  }, []);

  const elements = searchData.map((data: IRickAndMortyData) => (
    <Card key={data.id} props={data} open={onOpen} />
  ));
  const id = searchData.map((item) => item.id).findIndex((id) => id === selectedValue);
  return (
    <div data-testid="cardsField">
      <div className="cardsPage" onClick={onOpen}>
        {elements}
      </div>

      <Modal open={isOpen}>
        <FullCard data={searchData[id]} onClose={onClosed} />
      </Modal>
    </div>
  );
});
