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
import Icon from 'react-native-vector-icons/Feather';
import {handlePayment} from '../../utils/paymentType';
import {paymentMethod} from '../../model/transactionType';
import {unixToDate} from '../../utils/time';

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
          {mockFiles.reverse().map((item, index) => (
            <View>
              <Text>{unixToDate(item?.date, 'DD MMM YYYY HH:mm:ss')}</Text>
              <View key={index} style={styles.itemContainer}>
                <View style={styles.itemInnerLeftContainer}>
                  <Image
                    source={require('../../assets/images/sampleBank.png')}
                    resizeMode="contain"
                    style={styles.transactionImage}
                    borderRadius={10}
                  />
                </View>
                <View style={styles.itemInnerCenterContainer}>
                  <Text style={styles.itemDescriptionFont}>
                    {item.description.toString()}
                  </Text>
                </View>
                <View style={styles.itemInnerRightContainer}>
                  {handlePayment(item.type as paymentMethod, item.amount)}
                  <Icon name="chevron-right" size={30} color="#900" />
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
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
    width: matrix.horizontalScale(70),
    height: matrix.verticalScale(70),
  },
  transactionImage: {
    width: matrix.horizontalScale(50),
    height: matrix.verticalScale(50),
    alignSelf: 'center',
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
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 15,
    paddingLeft: 15,
    borderColor: 'grey',
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    height: matrix.verticalScale(100),
  },
  itemInnerLeftContainer: {
    backgroundColor: 'green',
    width: '20%',
    minWidth: '20%',
  },
  itemInnerCenterContainer: {
    backgroundColor: 'green',
    width: '35%',
    minWidth: '30%',
  },
  itemInnerRightContainer: {
    backgroundColor: 'purple',
    flexDirection: 'row',
    alignItems: 'center',
    width: '35%',
    minWidth: '30%',
    justifyContent: 'space-around',
  },

  itemMethodTypeFont: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  itemDescriptionFont: {
    fontStyle: 'italic',
    transform: [{skewX: '23deg'}],
  },
});

export default HomeView;
