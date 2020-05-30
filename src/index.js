/* eslint-disable no-console */
import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';

import './config/ReactotronConfig';

import {store, persistor} from './store';
import App from './App';

console.disableYellowBox = true;

export default function Index() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar barStyle="light-content" backgroundColor="#9b9b9b" />
          <App />
        </PersistGate>
      </Provider>
    </>
  );
}
