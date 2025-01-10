import styled from 'styled-components/native';

export const Text = styled.Text<{
  $primary: boolean;
  $fontSize: number;
  $fontWeight: string;
  $fontColor: string;
  $fontFlex: number | string;
  $fontAlignSelf: string;
}>`
  color: ${props => props.$fontColor};
  padding: 5px;
  font-weight: ${props => props.$fontWeight};
  font-size: ${props => props.$fontSize}px;
  flex: ${props => props.$fontFlex};
  align-self: ${props => props.$fontAlignSelf};
`;
