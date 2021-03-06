import React, { FC, useCallback, useEffect, useState } from 'react';
import { paginationPropsType } from '../../../type/type';
import { useAppDispatch } from '../../store/hooks';
import { mainSlice } from '../../store/mainReducer';
import './Pagination.css';

export const Pagination: FC<paginationPropsType> = ({
  cardsCount,
  page,
  pages,
  onSelect,
}: paginationPropsType) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState<boolean>(false);
  const [nextBtnDisabled, setNextBtnDisabled] = useState<boolean>(false);
  const [showPage, setshowPage] = useState<number>(1);
  const [showPages, setshowPages] = useState<number>(1);
  const { SET_PAGE } = mainSlice.actions;
  const dispatch = useAppDispatch();
  useEffect(() => {
    const showpage =
      cardsCount === '20' ? page : cardsCount === '40' ? Math.ceil(page / 2) : Math.ceil(page / 3);
    setshowPage(showpage);
    const showpages =
      cardsCount === '20'
        ? +pages
        : cardsCount === '40'
        ? Math.ceil(+pages / 2)
        : Math.ceil(+pages / 3);
    setshowPages(showpages);
  }, [page, pages, cardsCount]);

  useEffect(() => {
    page === 1 ? setPrevBtnDisabled(true) : setPrevBtnDisabled(false);
    page === +pages ? setNextBtnDisabled(true) : setNextBtnDisabled(false);
  }, [page, pages]);

  const prevPage = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, pageNumber: number) => {
      const payload =
        cardsCount === '20'
          ? pageNumber - 1
          : cardsCount === '40'
          ? pageNumber - 2
          : pageNumber - 3;
      pageNumber >= 2 ? dispatch(SET_PAGE(payload)) : dispatch(SET_PAGE(1));
    },
    [SET_PAGE, cardsCount, dispatch]
  );

  const nextPage = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, pageNumber: number) => {
      const payload =
        cardsCount === '20'
          ? pageNumber + 1
          : cardsCount === '40'
          ? pageNumber + 2
          : pageNumber + 3;
      pageNumber < +pages ? dispatch(SET_PAGE(payload)) : dispatch(SET_PAGE(+pages));
    },
    [SET_PAGE, cardsCount, dispatch, pages]
  );

  return (
    <div className="pagination">
      <span className="pagination-numbering">
        {showPage}/{showPages}
      </span>
      <div className="select-wrapper">
        <select className="select" value={cardsCount} onChange={(e) => onSelect(e.target.value)}>
          <option value="20" selected>
            20
          </option>
          <option value="40">40</option>
          <option value="60">60</option>
        </select>
        <div className="button-wrapper">
          <button
            className="pagination-btn"
            disabled={prevBtnDisabled}
            onClick={(e) => {
              prevPage(e, page);
            }}
          >
            prev
          </button>
          <button
            className="pagination-btn"
            disabled={nextBtnDisabled}
            onClick={(e) => {
              nextPage(e, page);
            }}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
};
