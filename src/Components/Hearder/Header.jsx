import React, { Component } from 'react';
import { HeaderBlock } from './headerStyled.js';

class Header extends Component {
  render() {
    return (
      <HeaderBlock>
        <h1>Star Wars</h1>
      </HeaderBlock>
    );
  }
}

export default Header;
