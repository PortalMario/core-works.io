import styled from '@emotion/styled';

const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

interface ContactLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

export function ContactLink({ href, children, external }: ContactLinkProps) {
  return (
    <StyledLink
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {children}
    </StyledLink>
  );
}
