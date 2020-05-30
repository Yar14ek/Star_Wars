import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Header from '../Header/Header';
import NawBtn from '../NawBtn/NawBtn';
import ItemList from '../ItemList/ItemList';

import { getAllItems, getPersons } from '../../action/swappi';

import { Content } from './stuleView';
class View extends Component {
  componentDidMount() {
    this.props.updateItemleList({
      root: this.props.root,
      page: this.props.present_Page,
    });
  }

  changePage = (oriented) => {
    switch (oriented) {
      case 'next':
        this.props.updateItemleList({
          root: this.props.root,
          page: this.props.next_Page,
        });
        break;
      case 'prev':
        this.props.updateItemleList({
          root: this.props.root,
          page: this.props.prev_Page,
        });
        break;
      default:
        break;
    }
  };
  render() {
    const {
      item_List,
      prev_Page,
      next_Page,
      present_Page,
      renderitem,
      getPersons,
    } = this.props;
    return (
      <Fragment>
        <Header />
        <Content>
          {item_List ? (
            <ItemList
              list={item_List}
              getPersons={getPersons}
              renderitem={renderitem}
            />
          ) : null}
          <NawBtn
            changePage={this.changePage}
            next={next_Page}
            prev={prev_Page}
            page={present_Page}
          />
        </Content>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  const { item_List, next_Page, prev_Page, present_Page } = state.tasckReduser;
  return { item_List, prev_Page, next_Page, present_Page };
};

const mapDispatchToProps = (dispatch) => {
  // console.log('this.props :>> ', this.props);
  return {
    updateItemleList: ({ page, root }) => dispatch(getAllItems({ page, root })),
    getPersons: (id) => dispatch(getPersons(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
