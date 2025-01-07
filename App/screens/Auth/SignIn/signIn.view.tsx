import React from 'react';
import {useDispatch} from 'react-redux';
import {View, Text} from 'react-native';
import {loginRequest} from '../../../redux/Auth/Actions';
import {successLogin} from '../../../redux/Auth/Reducer';
import BottonView from '../../../components/atom/Button/button.view';
import Button from '../../../components/molecules/LoginButton';
import LoginInput from '../../../components/molecules/LoginInput';
import {TextInput} from 'react-native-paper';
import LottieView from 'lottie-react-native';
import {MainAnimation} from '../../../components/helpers/index';
import {HOME_ROUTE} from '../../../navigation/Constants';

function LoginView({navigation}: any) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();

  const signIn = (username: any, password: any) => {
    dispatch(
      loginRequest({
        username,
        password,
      }),
    );
  };
  return (
    <View>
      {/* <BottonView onPress={() => signIn({username, password})}>
        <Text style={{color: 'black'}}>Sign in</Text>
        <Text style={{color: 'black'}}>222222</Text>
      </BottonView> */}
      <LottieView
        style={{height: '50%', width: '100%'}}
        source={MainAnimation('FirstScreen')}
        autoPlay={true}
        loop={false}
      />
      <View style={{width: '90%', alignSelf: 'center'}}>
        <LoginInput
          placeholder="Email"
          value={username}
          onChangeText={setUsername}
          label={'Email'}

          // borderBottomWidth={1}
        />
        <LoginInput
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
          // marginLeft: 35,
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
          onPress={() => dispatch(successLogin())}
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
