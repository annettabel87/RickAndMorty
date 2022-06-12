import React, { FC, useEffect, useState } from 'react';
import { Card } from './Card/Card';
import { SELECT_CARD } from '../../store/mainReducer';
import { useAppDispatch } from '../../store/hooks';
import { CardFieldProps, IRickAndMortyData } from '../../../type/type';
import './CardsField.css';

export const CardsField: FC<CardFieldProps> = React.memo(({ searchData }: CardFieldProps) => {
  const [selectedValue, setSelectedValue] = useState(-1);
  const dispatch = useAppDispatch();
  const onOpen = (e: React.SyntheticEvent<EventTarget>) => {
    if (!(e.target instanceof HTMLElement)) {
      return;
    }
    const { id } = e.target.dataset;
    if (id) {
      setSelectedValue(Number(id));
    }
  };
  useEffect(() => {
    const idSelectElement = searchData
      .map((item) => item.id)
      .findIndex((id) => id === selectedValue);
    dispatch(SELECT_CARD(searchData[idSelectElement]));
  }, [dispatch, searchData, selectedValue]);

  const elements = searchData.map((data: IRickAndMortyData) => <Card key={data.id} {...data} />);

  return (
    <div data-testid="cardsField">
      <div className="cardsPage" onClickCapture={onOpen}>
        {elements}
      </div>
    </div>
  );
});
