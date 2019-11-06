import styled from 'styled-components';
import { rgba, modularScale } from 'polished';

export const NavigationItem = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  font: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;

  text-decoration: none;
  display: block;
  padding: ${modularScale(0)};
  font-size: ${modularScale(0)};
  transition: all 200ms;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.primaryInvert};

  &:hover:enabled {
    cursor: pointer;
    box-shadow: 0 1px 18px ${({ theme }) => rgba(theme.colors.primary, 0.08)};
  }
  &:active {
    color: ${({ theme }) => theme.colors.primaryInvert};
    background: ${({ theme }) => theme.colors.primary};
  }
  &:disabled {
    cursor: default;
    color: ${({ theme }) => theme.colors.secondaryInvert};
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

export default { NavigationItem };
