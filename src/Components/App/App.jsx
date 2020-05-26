import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'reset-css';
import { Container, BodyColor } from './appStyle.js';
import MainPage from '../MainPage/MainPage';
import ItemDetail from '../ItemDetail/ItemDetail';
class App extends React.Component {
  render() {
    return (
      <BodyColor className="App">
        <Container>
          <Router>
            <Route path="/" exact component={MainPage} />
            <Route path="/item" exact component={ItemDetail} />
          </Router>
        </Container>
      </BodyColor>
    );
  }
}

export default App;
