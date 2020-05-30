import React, { Component } from 'react';

import {
  HeaderBlock,
  HeaderTitle,
  HeaderMenu,
  MenuItem,
  ItemLink,
} from './headerStyled.js';

class Header extends Component {
  render() {
    return (
      <HeaderBlock>
        <HeaderTitle>Star Wars</HeaderTitle>
        <HeaderMenu>
          <MenuItem>
            <ItemLink to="/people">Peoples</ItemLink>
          </MenuItem>
          <MenuItem>
            <ItemLink to="/ships">Ships</ItemLink>
          </MenuItem>
          <MenuItem>
            <ItemLink to="/planets">Planets</ItemLink>
          </MenuItem>
        </HeaderMenu>
      </HeaderBlock>
    );
  }
}

export default Header;
