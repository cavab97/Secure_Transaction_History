import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import normalize from '../../../components/helpers/normalizeText';
import {TransactionData} from '../../../model/TransactionType';
interface TransactionWithLabel {
  labelText: string;
  data: string;
}
function LabelBox({labelText, data}: TransactionWithLabel) {
  return (
    <View style={styles.transactionRowContainer}>
      <View style={styles.labelContainer}>
        <Text style={styles.labelFont}>{labelText}</Text>
      </View>
      <View>
        <Text style={styles.transactionDataFont}>{data}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  labelFont: {
    color: 'grey',
    fontSize: normalize(14.5),
  },
  labelContainer: {
    backgroundColor: 'yellow',
    width: '50%',
  },
  transactionDataFont: {
    color: 'grey',
    fontSize: normalize(14.5),
    fontWeight: 'bold',
  },

  transactionRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 0.5,
  },
});

export default LabelBox;
