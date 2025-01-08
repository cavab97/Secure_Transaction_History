import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {matrix} from '../../components/helpers'; // Ensure this is typed correctly
import {ScrollView} from 'react-native-gesture-handler';
import SocialMedia from './socialMedia/index';
import {mockFiles} from '../../services/data/mockData';

// Define types for the props, if necessary
interface HomeViewProps {
  // You can add props here if required, for now it's an empty object
}

const HomeView: React.FC<HomeViewProps> = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.headerContainer}>
        <Image
          source={require('../../assets/images/profile.jpg')}
          resizeMode="contain"
          style={styles.profileImage}
          borderRadius={10}
        />
        <Text style={styles.nameText}>LEONG WEI MEN</Text>
        <Text style={styles.jobTitleText}>Mobile Application Developer</Text>
        <View>
          <TouchableOpacity>{SocialMedia('fb')}</TouchableOpacity>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <ScrollView>
          {mockFiles.map((item, index) => (
            <View key={index} style={styles.itemContainer}>
              <View>
                <Image
                  source={require('../../assets/images/profile.jpg')}
                  resizeMode="contain"
                  style={styles.profileImage}
                  borderRadius={10}
                />
              </View>
              <Text style={styles.itemText}>{item.description.toString()}</Text>
            </View>
          ))}
        </ScrollView>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
};

// Define styles
const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  profileImage: {
    width: matrix.horizontalScale(100),
    height: matrix.verticalScale(100),
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  jobTitleText: {
    fontSize: 15,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  text: {
    fontSize: 42,
  },
  itemContainer: {
    float: 'left',
    width: '100%',
    position: 'relative',
    backgroundColor: 'yellow',
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingRight: 15,
    paddingLeft: 15,
  },
  itemText: {},
});

export default HomeView;
