import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import ProtectedRoutes from './ProtectedRoutes';
import {enableScreens} from 'react-native-screens';
import {RootState} from '../redux/store';
import AuthRoutes from './AuthRoutes';
import {navigationRef} from './NavigationService';

enableScreens();

function Navigators() {
  const authState = useSelector((state: RootState) => state.auths);

  const {loading, error, data, loginState} = authState;
  return (
    <NavigationContainer ref={navigationRef}>
      {!loginState ? (
        <AuthRoutes loading={loading} data={data} error={error} />
      ) : (
        <ProtectedRoutes />
      )}
    </NavigationContainer>
  );
}

export default Navigators;
