import styled from 'styled-components';
import { modularScale, rem } from 'polished';

import { Copy } from 'components/atoms/Copy';

export const Job = styled.div`
  margin-bottom: ${modularScale(4)};
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: ${({ theme }) => rem(theme.margin)};
    height: 4px;
    top: -${modularScale(-2)};
    left: -${({ theme }) => rem(theme.margin)};
    background-color: ${({ theme }) => theme.colors.tertiary};
  }
`;

export const TitleContainer = styled.div`
  margin-bottom: ${modularScale(0)};
`;

export const Title = styled.div`
  font-size: ${modularScale(3)};
  line-height: ${modularScale(1)};
  font-weight: 200;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  margin-bottom: ${modularScale(-3)};
`;

export const Date = styled.div`
  font-size: ${modularScale(0)};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${modularScale(2)};
  display: block;
`;

export const DateSegment = styled.span``;

export const Description = styled(Copy)`
  white-space: pre-line;
  margin-bottom: ${modularScale(2)};
`;

export const Label = styled.span``;

export const Roles = styled.ul`
  line-height: ${modularScale(1)};
  margin: 0;
  padding: 0;
  margin-bottom: ${modularScale(-1)};
  font-size: ${modularScale(1)};
  font-weight: 300;
`;

export const Role = styled.li`
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

export default { Job, TitleContainer, Title, Date, DateSegment, Description, Label, Roles, Role };
