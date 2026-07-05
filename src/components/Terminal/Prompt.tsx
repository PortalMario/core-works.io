import styled from '@emotion/styled';
import { colors } from '../../styles/tokens';
import { content } from '../../data/content';

const PromptWrapper = styled.span``;

const User = styled.span`
  color: ${colors.textBrightGreen};
`;

const Path = styled.span`
  color: ${colors.textMuted};
`;

export function Prompt() {
  return (
    <PromptWrapper>
      <User>{content.user}</User>
      <Path>:~$</Path>
    </PromptWrapper>
  );
}
