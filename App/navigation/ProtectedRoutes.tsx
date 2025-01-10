import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TRANSACTION_ROUTE, HOME_ROUTE, SIGNOUT_ROUTE} from './Constants';
import HomeContainer from '../screens/home/home.container';
import {AppDrawerContent} from './AppDrawerContent';
import TransactionContainer from '../screens/transactionDetails/transaction.container';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const TransactionStackNavigation: any = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={HOME_ROUTE}
        component={HomeContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={TRANSACTION_ROUTE}
        component={TransactionContainer}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

function ProtectedRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName={HOME_ROUTE}
      drawerContent={props => {
        return <AppDrawerContent {...props} />;
      }}>
      <Drawer.Screen
        name={HOME_ROUTE}
        component={TransactionStackNavigation}
        options={{drawerLabel: 'Home'}}
      />
    </Drawer.Navigator>
  );
}

export default ProtectedRoutes;
