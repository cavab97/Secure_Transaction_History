import {View, Text, Image, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {unixToDate} from '../../../utils/time';
import {handlePayment} from '../../../utils/paymentType';
import {TransactionData, paymentMethod} from '../../../model/transactionType';
import {styles} from '../styles';
import {LoaderTypeComponent} from '../../../components/molecules/ContentLoader';
import React from 'react';

const TransactionList = (
  data: TransactionData[],
  isLoading: boolean,
  isEnabled: boolean,
  loader: string,
) => {
  if (isLoading) {
    return (
      <View style={styles.noDataContainer}>{LoaderTypeComponent(loader)}</View>
    );
  }

  if (data.length === 0) {
    return (
      <View style={styles.noDataContainer}>
        <Text>No Transactions Available</Text>
      </View>
    );
  }

  return (
    <View>
      {data.map((item: TransactionData, index: number) => (
        <View key={`${item.date}-${index}`}>
          <Text>{unixToDate(item?.date, 'DD MMM YYYY HH:mm:ss')}</Text>
          <View style={styles.itemContainer}>
            <View style={styles.itemInnerLeftContainer}>
              <Image
                source={require('../../../assets/images/sampleBank.png')}
                resizeMode="contain"
                style={styles.transactionImage}
                borderRadius={10}
              />
            </View>
            <View style={styles.itemInnerCenterContainer}>
              <Text style={styles.itemDescriptionFont}>
                {item.description.toString()}
              </Text>
            </View>
            <View style={styles.itemInnerRightContainer}>
              {handlePayment(
                item.type as paymentMethod,
                item.amount,
                isEnabled,
              )}
              <Icon name="chevron-right" size={20} color="#900" />
            </View>
          </View>
          {index + 1 === (data.length ?? 0) && (
            <View style={styles.footer}>
              <Text>End Here</Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

export default TransactionList;
