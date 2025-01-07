import {View, Text, useColorScheme} from 'react-native';
import React from 'react';
import {Input} from './input.styles';

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
  label,
  mode,
  placeholder,
  alignItems,
  alignSelf,
  width,
  padding,
}: any) {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Input
      $alignItems={alignItems}
      $alignSelf={alignSelf}
      $width={width}
      $label={label}
      $mode={mode}
      $placeholder={placeholder}
      $primary={isDarkMode}
      $padding={padding}
      $bblRadius={borderBottomLeftRadius}
      $bbrRadius={borderBottomRightRadius}
      $btlRadius={borderTopLeftRadius}
      $btrRadius={borderTopRightRadius}
      $marginLeft={marginLeft}
      $brWidth={borderRightWidth}
      $brColor={borderRightColor}
      $position={position}
      $borderWidth={borderWidth}
      $borderBottomWidth={borderBottomWidth}>
      {children}
    </Input>
  );
}

export default InputView;
