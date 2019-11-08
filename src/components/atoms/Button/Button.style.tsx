import styled, { css } from 'styled-components';
import { rgba, modularScale } from 'polished';
import { colors } from 'components/theme/colors';

export const button = css`
  text-decoration: none;
  font-size: ${modularScale(0)};
  font-weight: 400;
  padding: ${modularScale(-2)} ${modularScale(-1)};
  color: ${({ theme }) => theme.colors.secondaryInvert};
  background: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  border: none;
  border-radius: 6px;
  box-shadow: 0 1px 18px ${rgba(colors.black, 0.08)};
  opacity: 0.8;
  transition: all 200ms;
  &:hover:enabled {
    opacity: 1;
    cursor: pointer;
    box-shadow: 0 1px 18px ${rgba(colors.black, 0.25)};
  }
  &:active {
    color: ${({ theme }) => theme.colors.secondary};
    background: ${({ theme }) => theme.colors.secondaryInvert};
  }
  &:disabled {
    opacity: 0.75;
    cursor: default;
    color: ${({ theme }) => theme.colors.secondaryInvert};
    background: ${({ theme }) => theme.colors.secondary};
  }
  -webkit-appearance: initial;
`;

export const Button = styled.button.attrs({ type: 'button' })`
  ${button}
`;

export default { Button };
