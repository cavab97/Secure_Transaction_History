import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import * as React from 'react';
import {View} from 'react-native';

export default AppDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{flex: 1}}>
      {/*all of the drawer items*/}
      <DrawerItemList {...props} style={{borderWidth: 1}} />
      <View style={{flex: 1, marginVertical: 20, borderWidth: 1}}>
        {/* here's where you put your logout drawer item*/}
        <DrawerItem
          label="Log out"
          //   onPress={() => {
          //     // AsyncStorage.clear();
          //     // props.navigation.replace('loginScreen');
          //   }}
          style={{flex: 1, justifyContent: 'flex-end'}}
        />
      </View>
    </DrawerContentScrollView>
  );
};
