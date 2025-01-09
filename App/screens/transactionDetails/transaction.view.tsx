import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import NavigationService from '../../navigation/NavigationService';
import Button from '../../components/molecules/BackButton';
import {StyleSheet, Text, View} from 'react-native';
import normalize from '../../components/helpers/normalizeText';
import LabelBox from '../../components/molecules/LabelBox';

const TransactionView: React.FC = () => {
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <Text style={styles.topicFont}>Transaction Details</Text>
        <View style={styles.mainContentContainer}>
          <LabelBox labelText="Transaction Type" data={'Credit'}></LabelBox>
          <LabelBox labelText="Transaction Amount" data={'Credit'}></LabelBox>
          <LabelBox labelText="Description" data={'Credit'}></LabelBox>
          <LabelBox labelText="Status" data={'Successful'}></LabelBox>
          <LabelBox labelText="Date/Time" data={'Credit'}></LabelBox>
        </View>
        <Button
          onPress={() => NavigationService.goBack()}
          marginTop={10}
          borderBottomRightRadius={15}
          Title={'Done'}
          borderRightColor={'grey'}
          borderRightWidth={1.5}
          borderBottomLeftRadius={15}
          borderTopLeftRadius={15}
          borderTopRightRadius={15}
          width={50}
          borderWidth={1}></Button>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
  },
  topicFont: {
    fontWeight: 'bold',
    fontSize: normalize(15),
  },
  mainContentContainer: {
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'dotted',
    width: '95%',
    height: '85%',
    paddingHorizontal: 10,
  },
});

export default TransactionView;
