import styled from 'styled-components/native';
// export const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: 15,
//     paddingHorizontal: 15,
//   },
//   item: {
//     textAlign: 'center',
//     marginTop: 20,
//     padding: 25,
//     fontSize: 30,
//     backgroundColor: 'steelblue',
//   },
// });
export const Button = styled.TouchableOpacity<{$primary?: boolean}>`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.$primary ? '#BF4F74' : 'white')};
  color: ${props => (props.$primary ? 'black' : '#BF4F74')};
  padding: 10px;

  /* background: ${props => (props.$primary ? '#BF4F74' : 'white')};
  color: ${props => (props.$primary ? 'white' : '#BF4F74')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px; */
`;

