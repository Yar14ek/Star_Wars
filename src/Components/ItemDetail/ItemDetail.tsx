import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { ButtonBack, ItemBlock, Text, TextContent } from './styleItemDetail';
import Loader from '../Loader/Loader';
import { InitialStateType, PersonType } from '../../reducers/tasckReduser';

interface ItemDetailProps {
  person: PersonType;
}

class ItemDetails extends Component<ItemDetailProps> {
  state = {
    loader: false,
  };
  componentDidUpdate(prevState: ItemDetailProps) {
    if (this.props.person !== prevState.person) {
      this.updateLoader();
    }
  }

  shipsRender = (arr: Array<object>) => {
    if (!arr.length) {
      return <span>Dont have:(</span>;
    }
    return arr.map((el: any, i: number) => {
      return <TextContent key={i}>{`${el.name}, `} </TextContent>;
    });
  };
  updateLoader = () => {
    this.setState({
      loader: true,
    });
  };

  render() {
    if (!this.state.loader) {
      return (
        <ItemBlock>
          <Loader />
        </ItemBlock>
      );
    }
    const {
      birth_year,
      eye_color,
      homeworld,
      name,
      starships,
    } = this.props.person;

    return (
      <ItemBlock>
        <ButtonBack to="/people">Back</ButtonBack>
        <Text>
          Name: <TextContent>{name}</TextContent>
        </Text>
        <Text>
          Birth Day:<TextContent>{birth_year}</TextContent>{' '}
        </Text>
        <Text>
          Color eye: <TextContent>{eye_color}</TextContent>
        </Text>
        {homeworld ? (
          <Text>
            Home Planet: <TextContent>{homeworld.name}</TextContent>
          </Text>
        ) : null}
        {starships ? <Text>Ship(s): {this.shipsRender(starships)}</Text> : null}
      </ItemBlock>
    );
  }
}

type TasReduserType = {
  tasckReduser: InitialStateType;
};
const mapStateToProps = (state: TasReduserType) => {
  const person: any = state.tasckReduser.person; // fix this Types!!!!!
  return {
    person,
  };
};

export default connect(mapStateToProps, null)(ItemDetails);
