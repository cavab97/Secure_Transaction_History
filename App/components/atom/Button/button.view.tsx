import {View, Text, useColorScheme} from 'react-native';
import React from 'react';
import {Button} from './button.styles';

function BottonView({children}: any) {
  const isDarkMode = useColorScheme() === 'dark';

  return <Button $primary={isDarkMode}>{children}</Button>;
}

export default BottonView;
