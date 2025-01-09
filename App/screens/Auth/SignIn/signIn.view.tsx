import React from 'react';
import {useDispatch} from 'react-redux';
import {View, Text} from 'react-native';
import {loginRequest} from '../../../redux/auth/Actions';
import {successLogin} from '../../../redux/auth/Reducer';
import BottonView from '../../../components/atom/Button/button.view';
import Button from '../../../components/molecules/LoginButton';
import LoginInput from '../../../components/molecules/LoginInput';
import {TextInput} from 'react-native-paper';
import LottieView from 'lottie-react-native';
import {MainAnimation} from '../../../components/helpers/index';
import {HOME_ROUTE} from '../../../navigation/Constants';
import TouchID from 'react-native-touch-id';
import {showMessage} from 'react-native-flash-message';
import {optionalConfigObject} from '../../../utils/fingerPrintSetting/data';
import {handleBiometricError} from '../../../utils/errorHandle/fingerprint';

function LoginView({navigation}: any) {
  const [username, setUsername] = React.useState('john_doe');
  const [password, setPassword] = React.useState('securePassword123');
  const dispatch = useDispatch();

  const signIn = (username: any, password: any) => {
    dispatch(
      loginRequest({
        username,
        password,
      }),
    );
  };

  const pressHandler = async () => {
    const optionalConfigObjects = {
      unifiedErrors: false, // use unified error messages (default false)
      passcodeFallback: false, // if true is passed, itwill allow isSupported to return an error if the device is not enrolled in touch id/face id etc. Otherwise, it will just tell you what method is supported, even if the user is not enrolled.  (default false)
    };

    TouchID.authenticate('Please LogIn', optionalConfigObject)
      .then((success: boolean) => {
        if (success) {
          dispatch(loginRequest({username, password}));
        } else {
          showMessage({
            message: 'You need to log in once',
            type: 'danger',
          });
        }
        console.log('Authenticated Successfully');
      })
      .catch((error: any) => {
        // showMessage({
        //   message: 'You need to log in once',
        //   type: 'danger',
        // });
        handleBiometricError(error);
      });
  };
  return (
    <View>
      <LottieView
        style={{height: '50%', width: '100%'}}
        source={MainAnimation('FirstScreen')}
        autoPlay={true}
        loop={false}
      />
      <View style={{width: '90%', alignSelf: 'center'}}>
        <TextInput
          placeholder="Email"
          value={username}
          onChangeText={setUsername}
          label={'Email'}
          right={
            <TextInput.Icon
              icon="fingerprint"
              onPressIn={() => pressHandler()}
            />
          }
          // borderBottomWidth={1}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          label={'Password'}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          alignSelf: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Button
          onPress={() => navigation.pop()}
          marginTop={10}
          borderBottomRightRadius={15}
          Title={'Back'}
          borderRightColor={'grey'}
          borderRightWidth={1.5}
          borderBottomLeftRadius={15}
          borderTopLeftRadius={15}
          borderTopRightRadius={15}
          width={50}
          borderWidth={1}></Button>
        <Button
          onPress={() => dispatch(loginRequest({username, password}))}
          marginTop={10}
          borderBottomRightRadius={15}
          Title={'LOGIN'}
          borderRightColor={'grey'}
          borderRightWidth={1.5}
          borderBottomLeftRadius={15}
          borderTopLeftRadius={15}
          borderTopRightRadius={15}
          width={50}
          borderWidth={1}></Button>
      </View>
    </View>
  );
}

export default LoginView;
