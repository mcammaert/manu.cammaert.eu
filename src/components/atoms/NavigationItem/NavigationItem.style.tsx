import styled from 'styled-components';
import { modularScale } from 'polished';
import { button } from 'components/atoms/Button/Button.style';

export const NavigationItem = styled.button`
  ${button}

  padding: ${modularScale(0)};
  font-size: ${modularScale(0)};

  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.primaryInvert};

  &:active {
    color: ${({ theme }) => theme.colors.secondaryInvert};
    background: ${({ theme }) => theme.colors.secondary};
  }
  &:disabled {
    color: ${({ theme }) => theme.colors.secondaryInvert};
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

export default { NavigationItem };
