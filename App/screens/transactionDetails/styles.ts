import {StyleSheet} from 'react-native';
import {matrix} from '../../components/helpers';
import normalize from '../../components/helpers/normalizeText';

// Define styles
export const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
  },
  topicFont: {
    fontWeight: 'bold',
    fontSize: normalize(15),
    padding: 10,
  },
  mainContentContainer: {
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'dotted',
    width: '95%',
    height: '80%',
    paddingHorizontal: 10,
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
  },
});
