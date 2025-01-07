import React from 'react';
import {useDispatch} from 'react-redux';
import {View, Text} from 'react-native';
import {loginRequest} from '../../../redux/Auth/Actions';
import BottonView from '../../../components/atom/Button/button.view';
import Button from '../../../components/molecules/LoginButton';
import LoginInput from '../../../components/molecules/LoginInput';
import {TextInput} from 'react-native-paper';

function LoginView() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();

  const signIn = (username, password) => {
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
      <LoginInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}

        // borderBottomWidth={1}
      />
      <LoginInput
        placeholderTextColor="red"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        // borderBottomWidth={1}
      />
      <TextInput
        mode="outlined"
        label="Outlined input"
        placeholder="Type something"
      />
      <View
        style={{
          flexDirection: 'row',
          // width: '90%',
          alignSelf: 'center',
          // marginLeft: 35,
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Button
          Title={'LOGIN'}
          borderBottomLeftRadius={15}
          borderTopLeftRadius={15}
          borderBottomRightRadius={15}
          borderTopRightRadius={15}
          position={'relative'}></Button>
      </View>
    </View>
  );
}

export default LoginView;
