import {View, Text, useColorScheme} from 'react-native';
import React from 'react';
import {Button} from './button.styles';

function BottonView({
  children,
  borderBottomRightRadius,
  borderBottomLeftRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderRightColor,
  borderRightWidth,
  marginLeft,
  position,
  borderWidth,
  onPress,
}: any) {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Button
      onPress={onPress}
      $primary={isDarkMode}
      $bblRadius={borderBottomLeftRadius}
      $bbrRadius={borderBottomRightRadius}
      $btlRadius={borderTopLeftRadius}
      $btrRadius={borderTopRightRadius}
      $marginLeft={marginLeft}
      $brWidth={borderRightWidth}
      $brColor={borderRightColor}
      $borderWidth={borderWidth}
      $position={position}>
      {children}
    </Button>
  );
}

export default BottonView;
