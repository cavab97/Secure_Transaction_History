import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import Botton from '../../atom/Button/button.view';
import Text from '../../atom/Text/text.view';
import { LoginButtonProps } from '../../../model/Component';
function LoginButton({
  Title,
  borderBottomRightRadius = 0,
  borderBottomLeftRadius = 0,
  borderTopLeftRadius = 0,
  borderTopRightRadius = 0,
  borderRightColor = 'black',
  borderRightWidth = 0,
  marginLeft = 0,
  position = "relative",
  borderWidth = 0,
  onPress,
  width = 100,
  padding = 1,
  marginTop = 0,
}: LoginButtonProps) {
  return (
    <Botton
      marginTop={marginTop}
      padding={padding}
      width={width}
      onPress={onPress}
      borderBottomRightRadius={borderBottomRightRadius}
      borderBottomLeftRadius={borderBottomLeftRadius}
      borderTopLeftRadius={borderTopLeftRadius}
      borderTopRightRadius={borderTopRightRadius}
      borderRightColor={borderRightColor}
      borderRightWidth={borderRightWidth}
      marginLeft={marginLeft}
      borderWidth={borderWidth}
      position={position}>
      <Text>{Title}</Text>
    </Botton>
  );
}

export default LoginButton;
