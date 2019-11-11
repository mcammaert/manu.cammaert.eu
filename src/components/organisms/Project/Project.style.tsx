import styled from 'styled-components';
import { modularScale, rem, rgba } from 'polished';

import { Copy } from 'components/atoms/Copy';
import { Title as TitleComponent } from 'components/atoms/Title';

export const Project = styled.div`
  background-color: ${({ theme }) => rgba(theme.colors.primary, 0.025)};

  margin-top: ${modularScale(0)};
  padding: ${modularScale(0)} ${modularScale(-1)};
  margin-bottom: ${modularScale(-1)};
  border-radius: 4px;
`;

export const Title = styled(TitleComponent)`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 0;
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
  display: inline-block;

  &:after {
    content: '/';
    padding-left: ${modularScale(-4)};
    padding-right: ${modularScale(-4)};
  }
  &:last-child:after {
    content: '';
    padding 0;
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
  display: inline-block;
  line-height: ${modularScale(2)};
  margin-right: ${modularScale(-3)};
  margin-bottom: ${modularScale(-3)};
`;

export const References = styled.span`
  padding: 0;
  line-height: ${modularScale(3)};
`;

export const Reference = styled.span`
  list-style: none;
  font-size: ${modularScale(0)};
  color: ${({ theme }) => theme.colors.secondary};

  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 90%;
`;

export default { Project, Title, Roles, Role, Description, Technologies, Technology, References, Reference };
