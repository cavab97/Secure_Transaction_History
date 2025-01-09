import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {ABOUT_ROUTE, HOME_ROUTE, SIGNOUT_ROUTE, POST_ROUTE} from './Constants';
import HomeContainer from '../screens/home/home.container';
import LoginContainer from '../screens/auth/login/first.container';
import {AppDrawerContent} from './AppDrawerContent';
const Drawer = createDrawerNavigator();

function ProtectedRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName={HOME_ROUTE}
      drawerContent={props => {
        return <AppDrawerContent {...props} />;
      }}>
      <Drawer.Screen
        name={HOME_ROUTE}
        component={HomeContainer}
        options={{drawerLabel: 'Home'}}
      />

      {/* <Drawer.Screen
        name={SIGNOUT_ROUTE}
        component={AboutContainer}
        options={{drawerLabel: 'Logout'}}
      /> */}
    </Drawer.Navigator>
  );
}

export default ProtectedRoutes;
