import styled from 'styled-components';
import { modularScale } from 'polished';

import { NavigationItem } from 'components/atoms/NavigationItem';

export const ThemeSwitcher = styled.div`
  margin-top: ${modularScale(3)};
`;

export const Label = styled.p`
  font-size: ${modularScale(0)};
  font-weight: 400;
  line-height: ${modularScale(1)};
  color: ${({ theme }) => theme.colors.copy};
`;

export const Buttons = styled.div`
  display: flex;
`;

export const Button = styled(NavigationItem)`
  margin-right: ${modularScale(0)};
  flex-grow: 1;
  &:last-of-type {
    margin-right: 0;
  }
`;

export default { ThemeSwitcher, Label, Buttons, Button };
