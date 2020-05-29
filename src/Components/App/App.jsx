import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Container, BodyColor } from './appStyle.js';
import PeoplePage from '../Page/PeoplePage/PeoplePage';
import ItemDetail from '../ItemDetail/ItemDetail';
class App extends React.Component {
  render() {
    return (
      <BodyColor className="App">
        <Container>
          <Router>
            <Route path="/people" exact component={PeoplePage} />
            <Route path="/item" exact component={ItemDetail} />
          </Router>
        </Container>
      </BodyColor>
    );
  }
}

export default App;
