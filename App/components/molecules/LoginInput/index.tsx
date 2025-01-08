import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import Input from '../../atom/Input/input.view';
import Text from '../../atom/Text/text.view';
function LoginInput({
  Title,
  borderBottomRightRadius = 0,
  borderBottomLeftRadius = 0,
  borderTopLeftRadius = 0,
  borderTopRightRadius = 0,
  borderRightColor = 'black',
  borderRightWidth = 0,
  marginLeft = 0,
  position = 'relative',
  borderWidth = 0,
  borderBottomWidth = 0,
  label = '',
  mode = 'outlined',
  placeholder = '',
  width = 100,
  padding = 0,
  alignItems = 'stretch',
  alignSelf = 'flex-start',
  secureTextEntry = false,
}: any) {
  return (
    <Input
      label={label}
      secureTextEntry={secureTextEntry}
      alignItems={alignItems}
      alignSelf={alignSelf}
      padding={padding}
      mode={mode}
      placeholder={placeholder}
      borderBottomRightRadius={borderBottomRightRadius}
      borderBottomLeftRadius={borderBottomLeftRadius}
      borderTopLeftRadius={borderTopLeftRadius}
      borderTopRightRadius={borderTopRightRadius}
      borderRightColor={borderRightColor}
      borderRightWidth={borderRightWidth}
      marginLeft={marginLeft}
      position={position}
      borderWidth={borderWidth}
      borderBottomWidth={borderBottomWidth}
      width={width}
      ></Input>
  );
}

export default LoginInput;
