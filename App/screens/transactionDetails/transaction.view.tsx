import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import NavigationService from '../../navigation/NavigationService';
import Button from '../../components/molecules/BackButton';
import {StyleSheet, Text, View} from 'react-native';
import normalize from '../../components/helpers/normalizeText';
import LabelBox from '../../components/molecules/LabelBox';
import {TransactionData} from '../../model/TransactionType';
import {RouteProp} from '@react-navigation/native';
import {TRANSACTION_ROUTE} from '../../navigation/Constants';
import {unixToDate} from '../../utils/time';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';

type RootStackParamList = {
  [TRANSACTION_ROUTE]: TransactionData;
};
interface TransactionViewProps {
  route: RouteProp<RootStackParamList, typeof TRANSACTION_ROUTE>;
}

const TransactionView: React.FC<TransactionViewProps> = ({route}) => {
  const {amount, date, description, type} = route.params;
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <Text style={styles.topicFont}>Transaction Details</Text>
        <View style={styles.mainContentContainer}>
          <LabelBox labelText="Transaction Type" data={type}></LabelBox>
          <LabelBox
            labelText="Transaction Amount"
            data={'MYR ' + (amount ?? 0).toFixed(2).toString()}></LabelBox>
          <LabelBox labelText="Description" data={description}></LabelBox>
          <LabelBox labelText="Status" data={'Successful'}></LabelBox>
          <LabelBox
            labelText="Date/Time"
            data={
              date ? unixToDate(date, 'DD MMM YYYY HH:mm:ss') ?? '--' : '--'
            }></LabelBox>
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

export default TransactionView;
