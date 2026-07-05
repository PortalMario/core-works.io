import styled from '@emotion/styled';
import { colors } from '../../styles/tokens';

const Cursor = styled.span`
  display: inline-block;
  width: 8px;
  height: 16px;
  background-color: ${colors.textGreen};
  animation: blink 1.1s step-end infinite;
  vertical-align: middle;
  margin-left: 2px;
`;

export function BlinkingCursor() {
  return <Cursor />;
}
