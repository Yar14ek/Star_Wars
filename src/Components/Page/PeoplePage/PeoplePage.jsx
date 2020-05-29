import React, { Fragment } from 'react';
import View from '../../View/View';

// import Loader from '../../Loader/Loader';

import { ItemSpan, ItemText, ItemName } from './peopleStyled';

const PeoplePage = () => {
  const renderitem = (el) => {
    return (
      <Fragment>
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
      </Fragment>
    );
  };

  return <View renderitem={renderitem} root="people" />;
};

export default PeoplePage;
