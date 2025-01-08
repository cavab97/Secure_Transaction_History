import {StyleSheet, Text} from 'react-native';
import {paymentMethod} from '../../model/transactionType';
import React from 'react';

export const handlePayment = (paymentMethod: paymentMethod, amount: number) => {
  switch (paymentMethod) {
    case 'credit':
      return (
        <Text style={styles.itemAmountPlusFont}>+MYR{amount.toFixed(2)}</Text>
      );

      break;

    case 'debit':
      return (
        <Text style={styles.itemAmountMinusFont}>-MYR{amount.toFixed(2)}</Text>
      );
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
