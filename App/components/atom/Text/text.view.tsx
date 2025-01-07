import {View, useColorScheme} from 'react-native';
import React from 'react';
import {Text} from './text.styles';

function TextView({children}: any) {
  const isDarkMode = useColorScheme() === 'dark';

  return <Text $primary={isDarkMode}>{children}</Text>;
}

export default TextView;
