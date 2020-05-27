import React from 'react';

import Servisec from '../../servisec/servis';
import { NavLink } from 'react-router-dom';

import {
  List,
  ListItem,
  ItemName,
  ItemText,
  ItemSpan,
  linkStyle,
} from './itemListStyled.js';

const ItemList = (props) => {
  const { _getId } = new Servisec();
  const { list, getPersons } = props;

  const items = () => {
    return list.map((el) => {
      const id = _getId(el.url);
      return (
        <ListItem key={id} onClick={() => getPersons(id)}>
          <NavLink to="/item" style={linkStyle}>
            <ItemText>
              Name: <ItemName>{el.name}</ItemName>{' '}
            </ItemText>
            <ItemText>
              Gender: <ItemSpan>{el.gender}</ItemSpan>
            </ItemText>
            <ItemText>
              Birth-Day: <ItemSpan>{el.birth_year}</ItemSpan>
            </ItemText>
            <ItemText>
              Height: <ItemSpan>{el.height}</ItemSpan>
            </ItemText>
            <ItemText>
              Mass: <ItemSpan>{el.mass}</ItemSpan>
            </ItemText>
          </NavLink>
        </ListItem>
      );
    });
  };
  return <List>{items()}</List>;
};

export default ItemList;
