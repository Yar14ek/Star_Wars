import React from 'react';

import Servisec from '../../servisec/servis';

import { List, ListItem, LinkStyle } from './itemListStyled.js';

interface ItemListProps {
  list: Array<object>;
  getPersons: (id: number) => void;
  renderitem: (el: any) => any;
}

const ItemList: React.SFC<ItemListProps> = ({
  list,
  getPersons,
  renderitem,
}) => {
  const { _getId } = new Servisec();
  const items = () => {
    return list.map((el: any) => {
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
