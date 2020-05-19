import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';
import { getAllPeople } from '../../action/swappi';

import { Content } from './mainStyled';

class MainPage extends Component {
  state = {
    loader: false,
  };
  async componentDidMount() {
    await this.props.updatePiopleList();
  }

  render() {
    let content = this.props.people_List ? (
      <ItemList list={this.props.people_List} />
    ) : (
      <Loader />
    );
    return (
      <Fragment>
        <Header />
        <Content>{content}</Content>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  const { people_List } = state.tasckReduser;
  return { people_List };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePiopleList: () => dispatch(getAllPeople()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
