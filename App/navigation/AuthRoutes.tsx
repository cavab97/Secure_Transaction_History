import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LOGIN_ROUTE, SIGNIN_ROUTE, TRANSACTION_ROUTE} from './Constants';
import SplashScreen from '../components/SplashScreen';
import LoginContainer from '../screens/auth/login/first.container';
import SigninView from '../screens/auth/signIn/signIn.view';
import TransactionContainer from '../screens/transactionDetails/transaction.container';

const Stack = createNativeStackNavigator();
function AuthRoutes({loading, data, error}: any) {
  return (
    <Stack.Navigator>
      {loading === true ? (
        // We haven't finished checking for the token yet
        <Stack.Screen name="Splash" component={SplashScreen} />
      ) : data == null ? (
        <>
          <Stack.Screen
            name={LOGIN_ROUTE}
            component={LoginContainer}
            options={{
              title: 'Login',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={SIGNIN_ROUTE}
            component={SigninView}
            options={{
              title: 'SIGNIN_ROUTE',
              headerShown: false,
            }}
          />
        </>
      ) : (
        <></>
      )}
    </Stack.Navigator>
  );
}

export default AuthRoutes;
