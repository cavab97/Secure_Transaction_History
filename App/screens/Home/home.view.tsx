import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Switch,
  RefreshControl,
} from 'react-native';
import {matrix} from '../../components/helpers'; // Ensure this is typed correctly
import {ScrollView} from 'react-native-gesture-handler';
import SocialMedia from './socialMedia/index';
import {mockFiles} from '../../services/data/mockData';
import Icon from 'react-native-vector-icons/Feather';
import {handlePayment} from '../../utils/paymentType';
import {paymentMethod} from '../../model/transactionType';
import {dateToUnix, unixToDate} from '../../utils/time';
import {showMessage} from 'react-native-flash-message';
import TouchID from 'react-native-touch-id';
import {optionalConfigObject} from '../../utils/fingerPrintSetting/data';
import {handleBiometricError} from '../../utils/errorHandle/fingerprint';
import {useDispatch} from 'react-redux';
import {successLogout} from '../../redux/auth/Reducer';
import {handleEyeSwitch} from '../../utils/eyeBalance';
import normalize from '../../components/helpers/normalizeText';

interface HomeViewProps {}

const HomeView: React.FC<HomeViewProps> = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [balanceHide, setBalanceHide] = useState(true);
  const [pullRefreshing, setPullRefreshing] = React.useState(false);

  const dispatch = useDispatch();

  const onRefresh = React.useCallback(() => {
    setPullRefreshing(true);
    setTimeout(() => {
      setPullRefreshing(false);
    }, 1000);
  }, []);

  const toggleSwitch = () => {
    TouchID.authenticate('Please LogIn', optionalConfigObject)
      .then((success: boolean) => {
        if (success) {
          setIsEnabled(previousState => !previousState);
        } else {
          showMessage({
            message: 'You need to log in once',
            type: 'danger',
          });
        }
        console.log('Authenticated Successfully');
      })
      .catch((error: any) => {
        dispatch(successLogout());
        // showMessage({
        //   message: 'You need to log in once',
        //   type: 'danger',
        // });
        handleBiometricError(error);
      });
  };

  const toggleBalanceSwitch = () => {
    setBalanceHide(previousState => !previousState);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.introduceContainer}>
        <Text style={styles.describeStyle}>Welcome back</Text>
        <View style={styles.balanceContainer}>
          {handleEyeSwitch(toggleBalanceSwitch, 300, balanceHide)}
        </View>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.maskedAmountButton}>
          <Text style={styles.topicFont}>Transaction History</Text>
          <TouchableOpacity
            onPress={() => {
              toggleSwitch();
            }}>
            <Text style={styles.unlockFont}>Tap To View</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          nestedScrollEnabled={true}
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl refreshing={pullRefreshing} onRefresh={onRefresh} />
          }>
          {mockFiles.map((item, index) => (
            <View key={`${item.date}-${index}`}>
              <Text>{unixToDate(item?.date, 'DD MMM YYYY HH:mm:ss')}</Text>
              <View key={index} style={styles.itemContainer}>
                <View style={styles.itemInnerLeftContainer}>
                  <Image
                    source={require('../../assets/images/sampleBank.png')}
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
                  <Icon name="chevron-right" size={30} color="#900" />
                </View>
              </View>
              {index + 1 === (mockFiles.length ?? 0) && (
                <View style={styles.footer}>
                  <Text>End Here</Text>
                </View>
              )}
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

// Define styles
const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: matrix.horizontalScale(70),
    height: matrix.verticalScale(70),
  },
  transactionImage: {
    width: matrix.horizontalScale(40),
    height: matrix.verticalScale(40),
    alignSelf: 'center',
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: normalize(20),
  },
  jobTitleText: {
    fontSize: normalize(15),
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  text: {
    fontSize: normalize(42),
  },
  itemContainer: {
    float: 'left',
    width: '100%',
    position: 'relative',
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 15,
    paddingLeft: 15,
    borderColor: 'grey',
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    height: matrix.verticalScale(100),
  },
  itemInnerLeftContainer: {
    width: '20%',
    minWidth: '20%',
  },
  itemInnerCenterContainer: {
    width: '35%',
    minWidth: '30%',
  },
  itemInnerRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '35%',
    minWidth: '30%',
    justifyContent: 'space-between',
  },

  itemMethodTypeFont: {
    fontSize: normalize(13),
    fontWeight: 'bold',
  },
  itemDescriptionFont: {
    fontStyle: 'italic',
    transform: [{skewX: '23deg'}],
  },
  maskedAmountButton: {flexDirection: 'row', justifyContent: 'space-between'},
  balanceStyle: {},
  balanceContainer: {
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },

  introduceContainer: {
    alignContent: 'flex-start',
    padding: 5,
  },
  describeStyle: {
    // backgroundColor: 'grey',
    alignContent: 'flex-start',
    fontSize: normalize(15),
    fontWeight: 'bold',
  },
  scrollView: {
    paddingVertical: 20,
  },
  footer: {
    alignItems: 'center',
  },
  unlockFont: {
    color: 'blue',
  },
  topicFont: {
    fontSize: normalize(15),
    fontWeight: 'bold',
  },
});

export default HomeView;
