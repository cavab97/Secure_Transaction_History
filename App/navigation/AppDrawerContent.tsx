import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import * as React from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {successLogout} from '../redux/auth/Reducer';

export const AppDrawerContent = (props: any) => {
  const dispatch = useDispatch();

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{flex: 1}}>
      {/*all of the drawer items*/}
      <DrawerItemList {...props} />
      <View style={{flex: 1, marginVertical: 20}}>
        {/* here's where you put your logout drawer item*/}
        <DrawerItem
          label="Log out"
          onPress={() => {
            dispatch(successLogout());
          }}
          style={{flex: 1, justifyContent: 'flex-end'}}
        />
      </View>
    </DrawerContentScrollView>
  );
};
