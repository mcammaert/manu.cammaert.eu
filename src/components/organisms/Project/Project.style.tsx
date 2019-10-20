import styled from 'styled-components';
import { modularScale, rem, rgba } from 'polished';

import { Copy } from 'components/atoms/Copy';

export const Project = styled.div`
  border-top: 1px solid ${({ theme }) => rgba(theme.colors.primary, 0.08)};
  margin-top: ${modularScale(0)};
  padding-top: ${modularScale(0)};
  margin-bottom: ${modularScale(0)};
`;

export const Title = styled.div`
  font-size: ${modularScale(0)};
  line-height: ${modularScale(1)};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondary};
  display: inline;
`;

export const Roles = styled.ul`
  display: block;
  margin: 0;
  padding: 0;
  margin-bottom: ${modularScale(1)};
`;

export const Role = styled.li`
  font-size: ${modularScale(0)};
  line-height: ${modularScale(1)};
  display: inline;

  &:after {
    content: ' / ';
  }
  &:last-child:after {
    content: '';
  }
`;

export const Description = styled(Copy)`
  white-space: pre-line;
  margin-top: ${({ theme }) => rem(theme.margin)};
`;

export const Technologies = styled.span`
  padding: 0;
`;

export const Technology = styled.span`
  font-size: ${modularScale(-1)};
  line-height: ${modularScale(3)};
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => rgba(theme.colors.secondaryInvert, 0.35)};
  display: inline;
  margin-right: ${modularScale(0)};
  border-radius: 5px;
  padding: 0.25em 0.6em;
  font-weight: 400;
  box-shadow: 0 0 3px ${({ theme }) => rgba(theme.colors.secondary, 0.15)};
  text-transform: uppercase;
`;

export const References = styled.span`
  margin-left: ${({ theme }) => rem(theme.margin)};
  padding: 0;
  margin-bottom: ${modularScale(1)};
`;

export const Reference = styled.span`
  list-style: none;
  font-size: ${modularScale(0)};
  line-height: ${modularScale(2)};
  color: ${({ theme }) => theme.colors.secondary};
  margin-right: ${modularScale(0)};
  border-radius: 5px;
  font-weight: 300;
`;

export default { Project, Title, Roles, Role, Description, Technologies, Technology, References, Reference };
