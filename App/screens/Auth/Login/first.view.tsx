import React, {useState, useEffect} from 'react';
import {SIGNIN_ROUTE} from '../../../navigation/Constants';

import {useDispatch} from 'react-redux';
import {View, TextInput, Text, StatusBar, TouchableOpacity} from 'react-native';
import ImageView from '../../../components/molecules/ImageView';
import Button from '../../../components/molecules/LoginButton';
import LottieView from 'lottie-react-native';
import {MainAnimation} from '../../../components/helpers/index';
import type {StatusBarStyle} from 'react-native';
const STYLES = ['default', 'dark-content', 'light-content'] as const;
function LoginView({navigation}: any) {
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
    STYLES[0],
  );
  useEffect(() => {}, []);
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      {/* <BottonView onPress={() => signIn({username, password})}>
        <Text style={{color: 'black'}}>Sign in</Text>
        <Text style={{color: 'black'}}>222222</Text>
      </BottonView> */}
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        // barStyle={statusBarStyle}
        // showHideTransition={statusBarTransition}
        hidden={false}
      />
      <LottieView
        style={{height: '75%', width: '100%'}}
        source={MainAnimation('FirstScreen')}
        autoPlay={true}
        loop={false}
      />
      
      <View
        style={{
          flexDirection: 'column',
          width: '100%',
          alignSelf: 'center',
          justifyContent: 'space-around',
          height: '15%',
          // marginLeft: 35,
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Button
          onPress={() => navigation.navigate(SIGNIN_ROUTE)}
          Title={'SIGN IN'}
          borderBottomLeftRadius={15}
          borderTopLeftRadius={15}
          borderBottomRightRadius={15}
          borderTopRightRadius={15}
          position={'relative'}
          width={50}
          borderWidth={1}></Button>
        <Button
          borderBottomRightRadius={15}
          Title={'REGISTER'}
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
