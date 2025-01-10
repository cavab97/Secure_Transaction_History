import React from 'react';

import {StyleSheet, View} from 'react-native';
import normalize from '../../../components/helpers/normalizeText';
import Text from '../../atom/Text/text.view';
import {AlignSelf, FontColor, FontWeight} from '../../helpers/enum';
interface TransactionWithLabel {
  labelText: string;
  data: string;
}
function LabelBox({labelText, data}: TransactionWithLabel) {
  return (
    <View style={styles.transactionRowContainer}>
      <View style={styles.labelContainer}>
        <Text
          textSize={normalize(13.5)}
          fontWeight={FontWeight.Regular}
          fontFlex={'auto'}
          fontColor={FontColor.Black}>
          {labelText}
        </Text>
      </View>
      <View style={styles.valueContainer}>
        <Text
          adjustsFontSizeToFit={true}
          textSize={normalize(13.5)}
          fontWeight={FontWeight.ExtraBold}
          fontAlignSelf={AlignSelf.FlexEnd}
          fontFlex={'1'}
          fontColor={FontColor.Black}>
          {data}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  labelContainer: {
    width: '45%',
  },
  valueContainer: {
    width: '50%',
  },

  transactionRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 0.5,
  },
});

export default LabelBox;
