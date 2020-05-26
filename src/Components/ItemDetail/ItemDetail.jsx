import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { buttonStyle, ItemBlock, Text, TextContent } from './item_Detail';
import Loader from '../Loader/Loader';

class ItemDetails extends Component {
  state = {
    loader: false,
  };
  componentDidUpdate(prevState) {
    if (this.props.person !== prevState.person) {
      this.updateLoader();
    }
  }

  shipsRender = (arr) => {
    if (!arr.length) {
      return <span>Dont have:(</span>;
    }
    return arr.map((el, i) => {
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
        <Link to="/" style={buttonStyle}>
          Back
        </Link>
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
const mapStateToProps = (state) => {
  const { person } = state.tasckReduser;
  return {
    person,
  };
};

export default connect(mapStateToProps, null)(ItemDetails);
