import React from 'react';
import {useDispatch} from 'react-redux';
import {View, TextInput, Text} from 'react-native';
import {loginRequest} from '../../../redux/Auth/Actions';
import BottonView from '../../../components/atom/Button/button.view';
import Button from '../../../components/molecules/LoginButton/Login';

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
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {/* <BottonView onPress={() => signIn({username, password})}>
        <Text style={{color: 'black'}}>Sign in</Text>
        <Text style={{color: 'black'}}>222222</Text>
      </BottonView> */}
      <Button Title={'LOGIN'}></Button>
    </View>
  );
}

export default LoginView;
