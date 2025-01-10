import NetInfo from '@react-native-community/netinfo';

export function checkConnection(): Promise<boolean> {
  return NetInfo.fetch().then(state => {
    return !!state.isConnected;
  });
}
