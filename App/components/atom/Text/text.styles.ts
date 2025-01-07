import styled from 'styled-components/native';
import {MainColour} from '../../helpers/colors';

export const Text = styled.Text<{$primary?: boolean}>`
  /* Adapt the colors based on primary prop */
  /* background: ${props => (props.$primary ? '#BF4F74' : 'white')}; */
  color: ${props => MainColour(props.$primary).primaryColour};
  padding: 5px;
  font-weight: bold;
  /* background: ${props => (props.$primary ? '#BF4F74' : 'white')};
  color: ${props => (props.$primary ? 'white' : '#BF4F74')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px; */
`;
