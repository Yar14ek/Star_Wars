import React, { Fragment } from 'react';
import View from '../../View/View';

// import Loader from '../../Loader/Loader';

import { ItemSpan, ItemText, ItemName } from './stylePlanetPage';

const PlanetPage = () => {
  const renderitem = (el) => {
    return (
      <Fragment>
        <ItemText>
          Name: <ItemName>{el.name}</ItemName>{' '}
        </ItemText>
        <ItemText>
          Climate: <ItemSpan>{el.climate}</ItemSpan>
        </ItemText>
        <ItemText>
          Population: <ItemSpan>{el.population}</ItemSpan>
        </ItemText>
        <ItemText>
          Diameter: <ItemSpan>{el.diameter}</ItemSpan>
        </ItemText>
        <ItemText>
          Orbital period: <ItemSpan>{el.orbital_period}</ItemSpan>
        </ItemText>
      </Fragment>
    );
  };

  return <View renderitem={renderitem} root="planets" />;
};

export default PlanetPage;
