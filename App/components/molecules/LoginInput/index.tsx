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
}: any) {
  return (
    <Input
      label={label}
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
      borderBottomWidth={borderBottomWidth}></Input>
  );
}

export default LoginInput;
