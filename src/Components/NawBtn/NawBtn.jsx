import React from 'react';
import { ButtonWrap, Buttons, PageNum } from './styleNawBtn.js';

const NawBtn = (props) => {
  const { changePage, next, prev, page } = props;
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
