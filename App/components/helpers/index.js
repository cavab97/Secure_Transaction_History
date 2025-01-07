import { Platform, Dimensions } from "react-native";
// import color from 'color';
import renderNode from "./renderNode";
import getIconType from "./getIconType";
import normalizeText from "./normalizeText";
import nodeType from "./nodeType";
import * as matrix from "./matrix";
import { purposeStatusColour, indexColour, statusIdColour } from "./colors";
import { MainAnimation } from "./animation";
import { indexVesselsIcon } from "./vesselsIcon";
const Screen = Dimensions.get("window");
const ScreenWidth = Screen.width;
const ScreenHeight = Screen.height;
const isIOS = Platform.OS === "ios";

const conditionalStyle = (condition, style) => (condition ? style : {});

export {
  renderNode,
  getIconType,
  normalizeText,
  nodeType,
  ScreenWidth,
  ScreenHeight,
  isIOS,
  conditionalStyle,
  purposeStatusColour,
  indexColour,
  indexVesselsIcon,
  statusIdColour,
  MainAnimation,
  matrix,
  //   color,
};
