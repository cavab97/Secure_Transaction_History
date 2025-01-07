import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import Image from '../../atom/image/image.view';
function ImageView({
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
  source = '#',
}: any) {
  return (
    <Image
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
      source={source}></Image>
  );
}

export default ImageView;
