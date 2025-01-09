import {Platform, Dimensions} from 'react-native';
// import color from 'color';
import renderNode from './renderNode';
import getIconType from './getIconType';
import normalizeText from './normalizeText';
import * as matrix from './matrix';
import {MainAnimation} from './animation';
const Screen = Dimensions.get('window');
const ScreenWidth = Screen.width;
const ScreenHeight = Screen.height;
const isIOS = Platform.OS === 'ios';

const conditionalStyle = (condition: any, style: any) =>
  condition ? style : {};

export {
  renderNode,
  getIconType,
  normalizeText,
  ScreenWidth,
  ScreenHeight,
  isIOS,
  conditionalStyle,
  MainAnimation,
  matrix,
  //   color,
};
