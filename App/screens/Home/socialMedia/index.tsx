import {Image} from 'react-native';
import React from 'react';
import {matrix} from '../../../components/helpers';
export default function socialMedia(shortForm: any) {
  switch (shortForm) {
    case 'fb':
      return (
        <Image
          style={{
            height: matrix.verticalScale(20),
            width: matrix.horizontalScale(20),
          }}
          resizeMode="contain"
          source={require('../../../assets/socialmediaImage/Facebook.png')}></Image>
      );
    case 'insta':
      return (
        <Image
          source={require('../../../assets/socialmediaImage/Facebook.png')}></Image>
      );
    case 'github':
      return (
        <Image
          source={require('../../../assets/socialmediaImage/Facebook.png')}></Image>
      );
    case 'linkd':
      return (
        <Image
          source={require('../../../assets/socialmediaImage/Facebook.png')}></Image>
      );
    case 'whatsapp':
      return (
        <Image
          source={require('../../../assets/socialmediaImage/Facebook.png')}></Image>
      );
    default:
      return '';
  }
}
