import {StyleSheet, Text} from 'react-native';
import {paymentMethod} from '../../model/TransactionType';
import React from 'react';

export const handlePayment = (
  paymentMethod: paymentMethod,
  amount: number,
  unMasked: boolean,
) => {
  switch (paymentMethod) {
    case 'credit':
      if (unMasked) {
        return <Text style={styles.itemDefaultFont}>*****</Text>;
      } else {
        return (
          <Text style={styles.itemAmountPlusFont}>+MYR{amount.toFixed(2)}</Text>
        );
      }
      break;

    case 'debit':
      if (unMasked) {
        return <Text style={styles.itemDefaultFont}>*****</Text>;
      } else {
        return (
          <Text style={styles.itemAmountMinusFont}>
            -MYR{amount.toFixed(2)}
          </Text>
        );
      }
      break;

    default:
      <Text style={styles.itemAmountPlusFont}>MYR{amount.toFixed(2)}</Text>;
  }
};
const styles = StyleSheet.create({
  itemAmountMinusFont: {color: 'red'},
  itemAmountPlusFont: {color: 'green'},
  itemDefaultFont: {color: 'grey'},
});
