import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import Botton from '../../atom/Button/button.view';
import Text from '../../atom/Text/text.view';
function LoginButton({Title}: any) {
  return (
    <Botton>
      <Text>{Title}</Text>
    </Botton>
  );
}

export default LoginButton;
