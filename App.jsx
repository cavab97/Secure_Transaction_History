import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './App/redux/store';
import {useColorScheme} from 'react-native';
import FlashMessage from 'react-native-flash-message';

import Main from './App/main';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <FlashMessage position="top" />
      <Main />
    </Provider>
  );
}

export default App;
