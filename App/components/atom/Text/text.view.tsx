import {View, useColorScheme} from 'react-native';
import React, {ReactNode} from 'react';
import {Text} from './text.styles';
import {AlignSelf, FontColor, FontWeight} from '../../helpers/enum';
import normalize from '../../helpers/normalizeText';

interface TextViewProps {
  children: ReactNode;
  textSize: number;
  fontWeight: string;
  fontColor?: string;
  adjustsFontSizeToFit?: boolean;
  fontFlex?: string;
  fontAlignSelf?: string;
}
function TextView({
  children,
  textSize = normalize(14),
  fontWeight = FontWeight.Regular,
  fontColor = FontColor.Primary,
  adjustsFontSizeToFit = false,
  fontFlex = 'auto',
  fontAlignSelf = AlignSelf.Auto,
}: TextViewProps) {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Text
      $primary={isDarkMode}
      $fontSize={textSize}
      $fontWeight={fontWeight}
      $fontColor={fontColor}
      $fontFlex={fontFlex}
      $fontAlignSelf={fontAlignSelf}
      adjustsFontSizeToFit={adjustsFontSizeToFit}>
      {children}
    </Text>
  );
}

export default TextView;
