import styled from 'styled-components';
import { modularScale, rem } from 'polished';

import { Copy } from 'components/atoms/Copy';

export const Job = styled.div`
  margin-bottom: ${modularScale(4)};
  //padding-left: ${({ theme }) => rem(theme.margin)};
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
  display: inline;
`;

export const Date = styled.div`
  font-size: ${modularScale(0)};
  line-height: ${modularScale(2)};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
  display: inline;
  margin-left: ${modularScale(-1)};
`;

export const DateSegment = styled.span`
  white-space: nowrap;
`;

export const Description = styled(Copy)`
  white-space: pre-line;
`;

export const Label = styled.span``;

export const Roles = styled.ul`
  display: block;
  margin: 0;
  padding: 0;
  margin-bottom: ${modularScale(1)};
  font-size: ${modularScale(1)};
  font-weight: 300;
`;

export const Role = styled.li`
  display: inline-block;

  &:after {
    content: ' / ';
  }
  &:last-child:after {
    content: '';
  }
`;

export default { Job, TitleContainer, Title, Date, DateSegment, Description, Label, Roles, Role };
