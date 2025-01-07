import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import Botton from '../../atom/Button/button.view';
import Text from '../../atom/Text/text.view';
function LoginButton({
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
  onPress,
}: any) {
  return (
    <Botton
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
