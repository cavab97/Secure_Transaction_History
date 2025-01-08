export type BiometricError = {
  name: string;
  message: string;
  details: string;
  code:
    | 'NOT_SUPPORTED'
    | 'NOT_AVAILABLE'
    | 'NOT_PRESENT'
    | 'NOT_ENROLLED'
    | 'LAErrorAuthenticationFailed'
    | 'LAErrorUserCancel'
    | 'LAErrorUserFallback'
    | 'LAErrorSystemCancel'
    | 'LAErrorPasscodeNotSet'
    | 'LAErrorTouchIDNotAvailable'
    | 'LAErrorTouchIDNotEnrolled'
    | 'RCTTouchIDUnknownError'
    | 'RCTTouchIDNotSupported';
};
