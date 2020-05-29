import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'reset-css';
import '@fortawesome/fontawesome-free/css/all.css';
import store from './store';
import App from './components/App/App';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
