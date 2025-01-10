import React, {useState, useEffect} from 'react';
import {SIGNIN_ROUTE} from '../../../navigation/Constants';

import {View, StatusBar, TouchableOpacity} from 'react-native';
import Button from '../../../components/molecules/LoginButton';
import LottieView from 'lottie-react-native';
import {MainAnimation} from '../../../components/helpers/index';
import type {StatusBarStyle} from 'react-native';
import NavigationService from '../../../navigation/NavigationService';
const STYLES = ['default', 'dark-content', 'light-content'] as const;
function LoginView() {
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
    STYLES[0],
  );
  useEffect(() => {}, []);
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <StatusBar animated={true} backgroundColor="#61dafb" hidden={false} />
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
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Button
          onPress={() => NavigationService.navigate(SIGNIN_ROUTE)}
          Title={'SIGN IN'}
          borderBottomLeftRadius={15}
          borderTopLeftRadius={15}
          borderBottomRightRadius={15}
          borderTopRightRadius={15}
          position={'relative'}
          width={50}
          borderWidth={1}></Button>
      </View>
    </View>
  );
}

export default LoginView;
