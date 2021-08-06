import React from 'react';
import ReactDom from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducers from './reducers';

// Components
import App from './components/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducers, composeEnhancers(applyMiddleware(ReduxThunk)));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.querySelector('#root')
);
