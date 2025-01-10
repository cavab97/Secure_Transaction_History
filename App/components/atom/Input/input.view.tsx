import {useColorScheme} from 'react-native';
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
  secureTextEntry,
}: any) {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Input
      label={label}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      mode="outlined"
      $alignItems={alignItems}
      $alignSelf={alignSelf}
      $width={width}
      $label={label}
      $mode={mode}
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
