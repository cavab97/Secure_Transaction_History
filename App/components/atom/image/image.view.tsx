import {View, Text, useColorScheme} from 'react-native';
import React from 'react';
import {ImageView} from './image.styles';

function InputView({
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
  borderBottomWidth,
  source,
}: any) {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ImageView
      source={source}
      $primary={isDarkMode}
      $bblRadius={borderBottomLeftRadius}
      $bbrRadius={borderBottomRightRadius}
      $btlRadius={borderTopLeftRadius}
      $btrRadius={borderTopRightRadius}
      $marginLeft={marginLeft}
      $brWidth={borderRightWidth}
      $brColor={borderRightColor}
      $position={position}
      $borderWidth={borderWidth}
      $borderBottomWidth={borderBottomWidth}></ImageView>
  );
}

export default InputView;
