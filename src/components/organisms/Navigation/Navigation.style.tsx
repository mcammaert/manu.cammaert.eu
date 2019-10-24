import styled from 'styled-components';
import { rem, rgba, modularScale } from 'polished';
import { Link as LinkComponent } from 'react-router-dom';

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

export const Link = styled(LinkComponent)`
  text-decoration: none;
  display: block;
  padding: ${modularScale(0)};
  font-size: ${modularScale(0)};
  transition: all 200ms;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.primaryInvert};
  &:hover {
    box-shadow: 0 1px 18px ${({ theme }) => rgba(theme.colors.primary, 0.08)};
  }
  &:active {
    color: ${({ theme }) => theme.colors.primaryInvert};
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const Menu = styled.ul`
  list-style: none;
  padding: ${modularScale(0)};
  padding-top: ${modularScale(6)};
`;

export const MenuItem = styled.li`
  list-style: none;
  margin-bottom: ${modularScale(-1)};
`;

export const MenuIcon = styled(StyledMenuIcon)``;

export default { NavigationContainer, Navigation, ToggleButton, Link, Menu, MenuItem, MenuIcon };
