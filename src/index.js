import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import groceriesApp from './reducers';
import AppContainer from 'components/AppContainer';
import './index.css';
import { save, load } from 'redux-localstorage-simple';

const createStoreWithMiddleware = applyMiddleware(
  save(), // Saving done here
)(createStore);
const store = createStoreWithMiddleware(
  groceriesApp,
  load(), // Loading done here
);
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('components/AppContainer', () => {
    ReactDOM.render(
      <Provider store={store}>
        <AppContainer />
      </Provider>,
      document.getElementById('root'),
    );
  });
}
