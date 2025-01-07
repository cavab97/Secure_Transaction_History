import styled from 'styled-components/native';
import {MainColour} from '../../helpers/colors';
export const Button = styled.TouchableOpacity<{
  $primary?: boolean;
  $bblRadius: string; // border-bottom-left-radius
  $bbrRadius: string; // border-bottom-right-radius
  $btlRadius: string; // border-top-left-radius
  $btrRadius: string; // border-top-right-radius
  $marginLeft: string;
  $brWidth: string;
  $brColor: string;
  $position: string;
  $borderWidth: string;
  $width: string;
  $padding: string;
  $marginTop: string;
}>`
  /* Adapt the colors based on primary prop */

  background: ${props => MainColour(props.$primary).secondaryColour};
  color: ${props => MainColour(props.$primary).primaryColour};
  padding: ${props => props.$padding}px;

  align-items: center;
  align-self: center;
  width: ${props => props.$width}%;
  border-bottom-left-radius: ${props => props.$bblRadius}px;
  border-bottom-right-radius: ${props => props.$bbrRadius}px;
  border-top-left-radius: ${props => props.$btlRadius}px;
  border-top-right-radius: ${props => props.$btrRadius}px;
  border-right-color: ${props => props.$brColor};
  border-right-width: ${props => props.$brWidth}px;
  margin-left: ${props => props.$marginLeft}px;
  margin-top: ${props => props.$marginTop}px;

  position: ${props => props.$position};
  border-color: ${props => MainColour(props.$primary).primaryColour};
  border-width: ${props => props.$borderWidth}px;
`;
