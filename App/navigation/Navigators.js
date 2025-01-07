import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import ProtectedRoutes from './ProtectedRoutes';
import {enableScreens} from 'react-native-screens';
import AuthRoutes from './AuthRoutes';

enableScreens();

function Navigators() {
  const authState = useSelector(state => state.auths);
  console.log('authState');
  console.log(authState);

  const {loading, error, data, loginState} = authState;
  return (
    <NavigationContainer>
      {!loginState ? (
        <AuthRoutes loading={loading} data={data} error={error} />
      ) : (
        <ProtectedRoutes />
      )}
    </NavigationContainer>
  );
}

export default Navigators;
