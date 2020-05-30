import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Container, BodyColor } from './appStyle.js';
import PeoplePage from '../Page/PeoplePage/PeoplePage';
import ItemDetail from '../ItemDetail/ItemDetail';
import ShipPage from '../Page/ShipPage/ShipPage';
import PlanetPage from '../Page/PlanetPage/PlanetPage';
class App extends React.Component {
  render() {
    return (
      <BodyColor className="App">
        <Container>
          <Router>
            <Route path="/people" exact component={PeoplePage} />
            <Route path="/ships" exact component={ShipPage} />
            <Route path="/planets" exact component={PlanetPage} />
            <Route path="/item" exact component={ItemDetail} />
          </Router>
        </Container>
      </BodyColor>
    );
  }
}

export default App;
