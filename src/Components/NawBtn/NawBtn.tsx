import React from 'react';
import { ButtonWrap, Buttons, PageNum } from './styleNawBtn.js';

type NawBtnProps = {
  changePage: (arg: string) => void;
  next: number | null;
  prev: number | null;
  page: number;
};

const NawBtn: React.SFC<NawBtnProps> = ({ changePage, next, prev, page }) => {
  return (
    <ButtonWrap>
      <Buttons
        disabled={prev ? null : 'disabled'}
        onClick={() => changePage('prev')}
      >
        <i className="fas fa-angle-double-left"></i>
        PREV
      </Buttons>
      <PageNum>
        Page <span>{page}</span>
      </PageNum>
      <Buttons
        disabled={next ? null : 'disabled'}
        onClick={() => changePage('next')}
      >
        NEXT
        <i className="fas fa-angle-double-right"></i>
      </Buttons>
    </ButtonWrap>
  );
};
export default NawBtn;
