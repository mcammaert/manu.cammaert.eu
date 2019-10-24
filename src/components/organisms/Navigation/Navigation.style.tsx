import styled from 'styled-components';
import { rem, rgba } from 'polished';

import { MenuIcon as StyledMenuIcon } from 'components/atoms/MenuIcon';

export const NavigationContainer = styled.div``;

export const Navigation = styled.div`
  background-color: ${({ theme }) => rgba(theme.colors.secondaryInvert, 0.85)};
  position: fixed;
  top: 0
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  transition: all 100ms;
  backdrop-filter: blur(2px);
  ul {
    padding: 4em;
  }
`;

export const ToggleButton = styled.button`
  position: fixed;
  -webkit-transform: translateZ(0);
  left: ${({ theme }) => rem(theme.margin)};
  top: ${({ theme }) => rem(theme.margin)};
  width: 44px;
  height: 44px;
  z-index: 1000;
  border: none;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

export const MenuIcon = styled(StyledMenuIcon)``;

export default { NavigationContainer, Navigation, ToggleButton, MenuIcon };
