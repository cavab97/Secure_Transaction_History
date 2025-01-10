import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {unixToDate} from '../../../utils/time';
import {handlePayment} from '../../../utils/paymentType';
import {TransactionData, paymentMethod} from '../../../model/TransactionType';
import {styles} from '../styles';
import {LoaderTypeComponent} from '../../../components/molecules/ContentLoader';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TRANSACTION_ROUTE} from '../../../navigation/Constants';
import {checkConnection} from '../../../components/helpers/checkConnection';
import {showMessage} from 'react-native-flash-message';
import {MessageType} from '../../../components/helpers/enum';

interface TransactionListProps {
  data: TransactionData[];
  isLoading: boolean;
  isEnabled: boolean;
  loader: 'list';
  navigation: {
    navigate: (name: string, params?: any) => void;
    goBack: () => void;
  };
}

const TransactionList: React.FC<TransactionListProps> = ({
  data,
  isLoading,
  isEnabled,
  loader,
  navigation,
}) => {
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
  const pressHandler = async (item: TransactionData) => {
    const {amount, date, description, type} = item;
    const internetStatus = await checkConnection();
    if (internetStatus == true) {
      navigation.navigate(TRANSACTION_ROUTE, {
        amount,
        date,
        description,
        type,
      });
    } else {
      showMessage({
        message: 'No network connection.',
        type: MessageType.Danger,
      });
    }
  };

  return (
    <View>
      {data.map((item: TransactionData, index: number) => (
        <TouchableOpacity
          key={`${item.date}-${index}`}
          onPress={async () => {
            pressHandler(item);
          }}>
          <Text style={styles.transactionDate}>
            {unixToDate(item?.date, 'DD MMM YYYY HH:mm:ss')}
          </Text>
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
              <Text style={styles.endFooter}>End Here</Text>
            </View>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TransactionList;
