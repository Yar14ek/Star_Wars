import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { buttonStyle, ItemBlock, Text, TextContent } from './item_Detail';

class ItemDetails extends Component {
  componentDidUpdate(prevState) {
    if (this.props.person !== prevState.person) {
      console.log(this.props.person);
    }
  }

  render() {
    const {
      birth_year,
      eye_color,
      homeworld,
      name,
      starships,
    } = this.props.person;
    const shipsOpen = (ships) => {
      return ships.map((el, i) => {
        return <Text key={i}>{el}</Text>;
      });
    };
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
        <Text>
          Home: <TextContent>{homeworld}</TextContent>
        </Text>
        {starships ? shipsOpen(starships) : null}
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
