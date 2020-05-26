import React from 'react';
import { connect } from 'react-redux';

import Servisec from '../../servisec/servis';
import { getPersons } from '../../action/swappi';
import { NavLink } from 'react-router-dom';

import {
  List,
  ListItem,
  ItemName,
  ItemText,
  ItemSpan,
  linkStyle,
} from './itemListStyled.js';

class ItemList extends React.Component {
  render() {
    const { _getId } = new Servisec();
    const { list } = this.props;

    const items = () => {
      return list.map((el) => {
        const id = _getId(el.url);
        return (
          <ListItem key={id} onClick={() => this.props.getPersons(id)}>
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPersons: (id) => dispatch(getPersons(id)),
  };
};
export default connect(null, mapDispatchToProps)(ItemList);
