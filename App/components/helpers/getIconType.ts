import AntIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import OcticonIcon from 'react-native-vector-icons/Octicons';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import ZocialIcon from 'react-native-vector-icons/Zocial';

export const registerCustomIconType = (
  id: string | number,
  customIcon: any,
) => {
  {
  }
  [id] = customIcon;
};

export default (type: string) => {
  switch (type) {
    case 'zocial':
      return ZocialIcon;
    case 'octicon':
      return OcticonIcon;
    case 'material':
      return MaterialIcon;
    case 'material-community':
      return MaterialCommunityIcon;
    case 'ionicon':
      return Ionicon;
    case 'foundation':
      return FoundationIcon;
    case 'evilicon':
      return EvilIcon;
    case 'entypo':
      return EntypoIcon;
    case 'font-awesome':
      return FAIcon;
    case 'simple-line-icon':
      return SimpleLineIcon;
    case 'feather': // default
      return FeatherIcon;
    case 'antdesign':
      return AntIcon;
    default:
      if (Object.prototype.hasOwnProperty.call({}, type)) {
        return {}[type];
      }
      return MaterialIcon;
  }
};
