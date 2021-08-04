import React from 'react';
import ReactDom from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './reducers';

// Components
import App from './components/App';

const store = createStore(Reducers);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.querySelector('#root')
);
