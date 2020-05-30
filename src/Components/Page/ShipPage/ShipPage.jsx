import React from 'react';
import View from '../../View/View';
import { ItemSpan, ItemText, ItemName } from './styleShipPage';

const ShipPage = () => {
  const renderitem = (el) => {
    return (
      <>
        <ItemText>
          Name: <ItemName>{el.name}</ItemName>{' '}
        </ItemText>
        <ItemText>
          passengers: <ItemSpan>{el.passengers}</ItemSpan>
        </ItemText>
        <ItemText>
          class: <ItemSpan>{el.starship_class}</ItemSpan>
        </ItemText>
        <ItemText>
          length: <ItemSpan>{el.length}</ItemSpan>
        </ItemText>
        <ItemText>
          Speed: <ItemSpan>{el.max_atmosphering_speed}</ItemSpan>
        </ItemText>
      </>
    );
  };
  return <View root="starships" renderitem={renderitem} />;
};

export default ShipPage;
