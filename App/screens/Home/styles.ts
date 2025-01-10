import {StyleSheet} from 'react-native';
import {matrix} from '../../components/helpers';
import normalize from '../../components/helpers/normalizeText';
import {FontColor} from '../../components/helpers/enum';

// Define styles
export const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: matrix.horizontalScale(70),
    height: matrix.verticalScale(70),
  },
  transactionImage: {
    width: matrix.horizontalScale(40),
    height: matrix.verticalScale(40),
    alignSelf: 'center',
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: normalize(20),
  },
  jobTitleText: {
    fontSize: normalize(15),
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  text: {
    fontSize: normalize(42),
  },
  itemContainer: {
    float: 'left',
    width: '100%',
    position: 'relative',
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
    width: '20%',
    minWidth: '20%',
  },
  itemInnerCenterContainer: {
    width: '35%',
    minWidth: '30%',
  },
  itemInnerRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '35%',
    minWidth: '30%',
    justifyContent: 'space-between',
  },

  itemMethodTypeFont: {
    fontSize: normalize(13),
    fontWeight: 'bold',
  },
  itemDescriptionFont: {
    fontStyle: 'italic',
    transform: [{skewX: '23deg'}],
    color: FontColor.Black,
    fontSize: normalize(11),
  },
  maskedAmountButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  balanceStyle: {},
  balanceContainer: {
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },

  introduceContainer: {
    alignContent: 'flex-start',
    padding: 5,
  },

  scrollView: {
    paddingVertical: 20,
  },
  footer: {
    alignItems: 'center',
    color: FontColor.Black,
    fontSize: normalize(12),
  },
  endFooter: {color: FontColor.Black, fontSize: normalize(12)},
  loadingContainer: {},
  noDataContainer: {alignItems: 'center'},
  transactionDate: {color: FontColor.Black, fontSize: normalize(12)},
});
