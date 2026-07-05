import styled from '@emotion/styled';
import { colors, typography, spacing } from '../../styles/tokens';
import { content } from '../../data/content';

const TitleBarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: ${spacing.titleBarPadding};
  background-color: ${colors.bgTitleBar};
  border-bottom: 1px solid ${colors.borderTitleBar};
  border-radius: 8px 8px 0 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const WindowButton = styled.span<{ color: string }>`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

const TitleText = styled.span`
  color: ${colors.textMuted};
  font-size: ${typography.titleBarFontSize};
`;

export function TitleBar() {
  return (
    <TitleBarWrapper>
      <ButtonGroup>
        <WindowButton color={colors.btnRed} />
        <WindowButton color={colors.btnAmber} />
        <WindowButton color={colors.btnGreen} />
      </ButtonGroup>
      <TitleText>{content.user}: ~</TitleText>
    </TitleBarWrapper>
  );
}
