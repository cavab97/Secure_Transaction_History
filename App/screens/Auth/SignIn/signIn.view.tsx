import React from 'react';
import {useDispatch} from 'react-redux';
import {View} from 'react-native';
import {loginRequest} from '../../../redux/auth/Actions';
import Button from '../../../components/molecules/LoginButton';
import {TextInput} from 'react-native-paper';
import LottieView from 'lottie-react-native';
import {MainAnimation} from '../../../components/helpers/index';
import TouchID from 'react-native-touch-id';
import {showMessage} from 'react-native-flash-message';
import {optionalConfigObject} from '../../../utils/fingerPrintSetting/data';
import {handleBiometricError} from '../../../utils/errorHandle/fingerprint';
import {checkConnection} from '../../../components/helpers/checkConnection';
import {MessageType} from '../../../components/helpers/enum';

function LoginView({navigation}: any) {
  const [username, setUsername] = React.useState('john_doe@gmail.com');
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
    // check connection before trigger api
    const internetStatus = await checkConnection();
    if (internetStatus == true) {
      TouchID.authenticate('Please LogIn', optionalConfigObject)
        .then((success: boolean) => {
          if (success) {
            signIn(username, password);
          } else {
            showMessage({
              message: 'You need to log in once',
              type: MessageType.Danger,
            });
          }
        })
        .catch((error: any) => {
          handleBiometricError(error);
        });
    } else {
      showMessage({
        message: 'No network connection.',
        type: 'danger',
      });
    }
  };

  const pressLogin = async () => {
    // check connection before trigger api
    const internetStatus = await checkConnection();
    if (internetStatus == true) {
      signIn(username, password);
    } else {
      showMessage({
        message: 'No network connection.',
        type: MessageType.Danger,
      });
    }
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
          onPress={() => pressLogin()}
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
