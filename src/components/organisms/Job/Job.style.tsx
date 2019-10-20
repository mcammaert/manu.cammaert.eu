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
  font-size: ${modularScale(2)};
  line-height: ${modularScale(2)};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
  display: inline;
`;

export const Date = styled.div`
  font-size: ${modularScale(0)};
  line-height: ${modularScale(2)};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.primary};
  display: inline;
  margin-left: ${modularScale(-1)};
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
`;

export const Role = styled.li`
  display: inline;

  &:after {
    content: ' / ';
  }
  &:last-child:after {
    content: '';
  }
`;

export default { Job, TitleContainer, Title, Date, Description, Label, Roles, Role };
