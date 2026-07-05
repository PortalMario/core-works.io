import styled from '@emotion/styled';
import { colors, spacing } from '../../styles/tokens';
import { TitleBar } from './TitleBar';
import { TerminalBody } from './TerminalBody';

const TerminalWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.bgViewport};
  padding: 20px;
`;

const TerminalCard = styled.div`
  width: 100%;
  max-width: ${spacing.cardMaxWidth};
  border-radius: 8px;
  border: 1px solid ${colors.borderGreen};
  overflow: hidden;
`;

export function Terminal() {
  return (
    <TerminalWrapper>
      <TerminalCard>
        <TitleBar />
        <TerminalBody />
      </TerminalCard>
    </TerminalWrapper>
  );
}
