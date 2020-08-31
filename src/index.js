import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
//redux-persist used for any application that utilizes redux including react
import { PersistGate } from 'redux-persist/integration/react';

import {store, persistor} from './redux/store';

import './index.css';
import App from './App';

// the persistor here being the persisted version of our store
// wrap our application in PersistGate to give it access to it      
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
