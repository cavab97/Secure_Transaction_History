import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import normalize from '../../components/helpers/normalizeText';
import React from 'react';
import {FontColor} from '../../components/helpers/enum';

export const handleEyeSwitch = (
  press: () => void,
  amount: number,
  masked: boolean,
) => {
  if (masked) {
    return (
      <>
        <Text style={styles.balanceFont}>MYR **** </Text>
        <Icon name="eye-off" size={25} color="grey" onPress={() => press()} />
      </>
    );
  } else {
    return (
      <>
        <Text style={styles.balanceFont}>MYR {amount.toFixed(2)} </Text>
        <Icon name="eye" size={25} color="grey" onPress={() => press()} />
      </>
    );
  }
};
const styles = StyleSheet.create({
  itemDefaultFont: {color: FontColor.Black, fontSize: normalize(12)},
  balanceFont: {
    fontSize: normalize(20),
    fontWeight: 'bold',
    color: FontColor.Black,
  },
});
