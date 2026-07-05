import styled from '@emotion/styled';
import { colors, typography, spacing } from '../../styles/tokens';
import { Prompt } from './Prompt';
import { ContactLink } from './ContactLink';
import { content } from '../../data/content';

const CommandWrapper = styled.div`
  margin-bottom: ${spacing.commandGap};
`;

const InputLine = styled.div`
  color: ${colors.textLight};
`;

const Command = styled.span`
  margin-left: 8px;
`;

const OutputLine = styled.div<{ outputStyle: string }>`
  margin-top: 4px;
  color: ${({ outputStyle }) => {
    switch (outputStyle) {
      case 'name':
        return colors.textLight;
      case 'accent':
        return colors.textGreen;
      case 'about':
        return colors.textAbout;
      default:
        return colors.textLight;
    }
  }};
  font-size: ${({ outputStyle }) =>
    outputStyle === 'name' ? typography.nameFontSize : 'inherit'};
  font-weight: ${({ outputStyle }) =>
    outputStyle === 'name' ? typography.nameWeight : 'normal'};
  max-width: ${({ outputStyle }) =>
    outputStyle === 'about' ? spacing.aboutMaxWidth : 'none'};
`;

const StackOutput = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.stackGap};
  margin-top: 4px;
  color: ${colors.textLight};
`;

const ContactOutput = styled.div`
  margin-top: 4px;
  color: ${colors.textLight};
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

interface CommandLineProps {
  command: string;
  output: string | string[];
  outputStyle: string;
}

export function CommandLine({ command, output, outputStyle }: CommandLineProps) {
  const renderOutput = () => {
    if (outputStyle === 'stack' && Array.isArray(output)) {
      return (
        <StackOutput>
          {output.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </StackOutput>
      );
    }

    if (outputStyle === 'contact') {
      return (
        <ContactOutput>
          <div>
            email:{' '}
            <ContactLink href={`mailto:${content.contact.email}`}>
              {content.contact.email}
            </ContactLink>
          </div>
          <div>
            phone:{' '}
            <ContactLink href={`tel:${content.contact.phone}`}>
              {content.contact.phone}
            </ContactLink>
          </div>
          <div>
            linkedin:{' '}
            <ContactLink
              href={`https://linkedin.com/${content.contact.linkedin}`}
              external
            >
              {content.contact.linkedin}
            </ContactLink>
          </div>
        </ContactOutput>
      );
    }

    return (
      <OutputLine outputStyle={outputStyle}>
        {output as string}
      </OutputLine>
    );
  };

  return (
    <CommandWrapper>
      <InputLine>
        <Prompt />
        <Command>{command}</Command>
      </InputLine>
      {renderOutput()}
    </CommandWrapper>
  );
}
