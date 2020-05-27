import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import ItemList from '../ItemList/ItemList';
import NawBtn from '../NawBtn/NawBtn';
import Loader from '../Loader/Loader';
import { getAllPeople, getPersons } from '../../action/swappi';

import { Content } from './peopleStyled';

class MainPage extends Component {
  state = {
    loader: false,
  };
  componentDidMount() {
    this.props.updatePiopleList(this.props.present_Page);
  }

  changePage = (oriented) => {
    const { next_Page, prev_Page } = this.props;
    switch (oriented) {
      case 'next':
        this.props.updatePiopleList(next_Page);
        break;
      case 'prev':
        this.props.updatePiopleList(prev_Page);
        break;
      default:
        break;
    }
  };

  render() {
    let content = this.props.people_List ? (
      <ItemList
        list={this.props.people_List}
        getPersons={this.props.getPersons}
      />
    ) : null;
    return (
      <Fragment>
        <Header />
        <Content>
          {content}
          <NawBtn
            changePage={this.changePage}
            next={this.props.next_Page}
            prev={this.props.prev_Page}
            page={this.props.present_Page}
          />
        </Content>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  const {
    people_List,
    next_Page,
    prev_Page,
    present_Page,
  } = state.tasckReduser;
  return { people_List, prev_Page, next_Page, present_Page };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePiopleList: (page) => dispatch(getAllPeople(page)),
    getPersons: (id) => dispatch(getPersons(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
