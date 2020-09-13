/**
 * @format
 */
import React from 'react';

import {AppRegistry, View, Text} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import Store from './Store/Store';
import {ToastProvider} from 'react-native-styled-toast';

const Root = () => (
  <Provider store={Store}>
    <ToastProvider>
      <App />
    </ToastProvider>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
