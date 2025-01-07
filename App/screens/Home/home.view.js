import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {matrix} from '../../components/helpers';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
function HomeView({navigate}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: 'yellow',
        }}>
        <Image
          source={require('../../assets/images/profile.jpg')}
          resizeMode="contain"
          style={{
            width: matrix.horizontalScale(100),
            height: matrix.verticalScale(100),
          }}
          borderRadius={10}
        />
        <Text style={{fontWeight: 'bold', fontSize: 20}}>LEONG WEI MEN</Text>
        <Text style={{fontSize: 15}}>Mobile Application Developer</Text>
        <View>
          <TouchableOpacity>{SocialMedia('fb')}</TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'grey',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}>
        <ScrollView>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </ScrollView>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 42,
  },
});

export default HomeView;
