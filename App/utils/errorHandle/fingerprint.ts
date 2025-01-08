import {showMessage} from 'react-native-flash-message';
import {BiometricError} from '../../model/FingerPrint';
import {Platform} from 'react-native';

export function handleBiometricError(error: BiometricError) {
  if (Platform.OS === 'ios') {
    switch (error.code) {
      case 'LAErrorAuthenticationFailed':
        showMessage({
          message: 'Authentication failed. Please provide valid credentials.',
          type: 'danger', // You can change the type to 'success', 'info', or 'warning' depending on your message
        });
        break;
      case 'LAErrorUserCancel':
        showMessage({
          message: 'Authentication canceled by user. User tapped Cancel.',
          type: 'warning',
        });
        break;
      case 'LAErrorUserFallback':
        showMessage({
          message:
            'Authentication canceled. User tapped fallback (Enter Password).',
          type: 'info',
        });
        break;
      case 'LAErrorSystemCancel':
        showMessage({
          message:
            'Authentication canceled by the system. Another app came to the foreground.',
          type: 'info',
        });
        break;
      case 'LAErrorPasscodeNotSet':
        showMessage({
          message:
            'Authentication could not start because passcode is not set on the device.',
          type: 'warning',
        });
        break;
      case 'LAErrorTouchIDNotAvailable':
        showMessage({
          message: 'Touch ID is not available on this device.',
          type: 'info',
        });
        break;
      case 'LAErrorTouchIDNotEnrolled':
        showMessage({
          message: 'Touch ID is not enrolled. Please enroll a fingerprint.',
          type: 'warning',
        });
        break;
      case 'RCTTouchIDUnknownError':
        showMessage({
          message: 'Unknown error while trying to authenticate.',
          type: 'danger',
        });
        break;
      case 'RCTTouchIDNotSupported':
        showMessage({
          message: 'Device does not support Touch ID.',
          type: 'danger',
        });
        break;
      default:
        showMessage({
          message: `Unknown iOS error: ${error.message}`,
          type: 'danger',
        });
    }
  } else if (Platform.OS === 'android') {
    switch (error.code) {
      case 'NOT_SUPPORTED':
        showMessage({
          message: 'Biometric authentication is not supported on this device.',
          type: 'danger',
        });
        break;
      case 'NOT_AVAILABLE':
        showMessage({
          message: 'Biometric authentication is not available at the moment.',
          type: 'danger',
        });
        break;
      case 'NOT_PRESENT':
        showMessage({
          message: 'No biometric hardware present on this device.',
          type: 'danger',
        });
        break;
      case 'NOT_ENROLLED':
        showMessage({
          message:
            'No fingerprints are enrolled. Please enroll at least one fingerprint.',
          type: 'danger',
        });

        break;
      default:
        console.log('An unknown error occurred:', error.message);
    }
  }
}
