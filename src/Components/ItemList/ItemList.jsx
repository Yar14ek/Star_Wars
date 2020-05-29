import React from 'react';

import Servisec from '../../servisec/servis';

import { List, ListItem, LinkStyle } from './itemListStyled.js';

const ItemList = ({ list, getPersons, renderitem }) => {
  const { _getId } = new Servisec();
  const items = () => {
    return list.map((el) => {
      const id = _getId(el.url);
      const label = renderitem(el);
      return (
        <ListItem key={id} onClick={() => getPersons(id)}>
          <LinkStyle to="/item">{label}</LinkStyle>
        </ListItem>
      );
    });
  };
  return <List>{items()}</List>;
};

export default ItemList;
