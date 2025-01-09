import NetInfo from '@react-native-community/netinfo';

export function checkConnection(): Promise<boolean> {
  return NetInfo.fetch().then(state => {
    console.log('Connection type', state.type);
    console.log('Is connected?', state.isConnected);
    return !!state.isConnected;
  });
}
