import styled from '@emotion/styled';
import { colors, spacing } from '../../styles/tokens';
import { content } from '../../data/content';
import { CommandLine } from './CommandLine';
import { Prompt } from './Prompt';
import { BlinkingCursor } from './BlinkingCursor';
import { ContactLink } from './ContactLink';

const BodyWrapper = styled.div`
  padding: ${spacing.bodyPadding};
  background-color: ${colors.bgCard};
  border-radius: 0 0 8px 8px;
`;

const CtaLine = styled.div`
  color: ${colors.textLight};
  margin-top: ${spacing.commandGap};
`;

const CtaCommand = styled.span`
  margin-left: 8px;
`;

export function TerminalBody() {
  return (
    <BodyWrapper>
      {content.commands.map((cmd) => (
        <CommandLine
          key={cmd.command}
          command={cmd.command}
          output={cmd.output}
          outputStyle={cmd.outputStyle}
        />
      ))}
      <CtaLine>
        <Prompt />
        <CtaCommand>
          <ContactLink href={content.cta.href}>
            {content.cta.command}
          </ContactLink>
        </CtaCommand>
        <BlinkingCursor />
      </CtaLine>
    </BodyWrapper>
  );
}
