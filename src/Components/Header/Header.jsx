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
            <ItemLink to="/people">People</ItemLink>
          </MenuItem>
          <MenuItem>Planet</MenuItem>
          <MenuItem>Ship</MenuItem>
        </HeaderMenu>
      </HeaderBlock>
    );
  }
}

export default Header;
