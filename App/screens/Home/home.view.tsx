import {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Switch,
  RefreshControl,
  Alert,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {showMessage} from 'react-native-flash-message';
import TouchID from 'react-native-touch-id';
import {optionalConfigObject} from '../../utils/fingerPrintSetting/data';
import {handleBiometricError} from '../../utils/errorHandle/fingerprint';
import {useDispatch} from 'react-redux';
import {successLogout} from '../../redux/auth/Reducer';
import {handleEyeSwitch} from '../../utils/eyeBalance';
import {transactionRequest} from '../../redux/transaction/Actions';
import {RootState} from '../../redux/store';
import {useSelector} from 'react-redux';
import {styles} from './styles';
import TransactionList from './transactionList';
import React from 'react';
import {checkConnection} from '../../components/helpers/checkConnection';
import NavigationService from '../../navigation/NavigationService';

const HomeView: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [balanceHide, setBalanceHide] = useState(true);
  const [pullRefreshing, setPullRefreshing] = React.useState(false);

  const dispatch = useDispatch();
  const authState = useSelector((state: RootState) => state.auths);
  const transactionState = useSelector((state: RootState) => state.transaction);

  const {loginState} = authState;
  const {data, loading} = transactionState;

  const onRefresh = React.useCallback(async () => {
    setPullRefreshing(true);
    try {
      const internetStatus = await checkConnection();
      if (internetStatus == true) {
        dispatch(transactionRequest());
      } else {
        showMessage({
          message: 'No network connection.',
          type: 'danger', // You can change the type to 'success', 'info', or 'warning' depending on your message
        });
      }
    } catch (error) {
      console.log(`onRefresh error${error}`);
    }

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

  useEffect(() => {
    const fetchHomeData = async () => {
      if (loginState) {
        try {
          dispatch(transactionRequest());
        } catch (error) {
          console.error('Error fetching home data:', error);
          Alert.alert('Failed to fetch home data.');
        }
      }
    };

    fetchHomeData();
  }, [loginState]);
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
          {TransactionList(data, loading, isEnabled, 'list', NavigationService)}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeView;
