import styled, { css } from 'styled-components';
import { rem, rgba, modularScale, lighten } from 'polished';
import { Link as LinkComponent } from 'react-router-dom';
import { animated } from 'react-spring';

import { colors } from 'components/theme/colors';
import { MenuIcon as StyledMenuIcon } from 'components/atoms/MenuIcon';

export const button = css`
  text-decoration: none;
  display: block;
  padding: ${modularScale(0)};
  font-size: ${modularScale(0)};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.primaryInvert};
  border-radius: 4px;
  box-shadow: 0 1px 18px ${rgba(colors.black, 0.1)};
  opacity: 0.85;
  transition: all 300ms;
  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 1px 18px ${rgba(colors.black, 0.2)};
  }
  &:active {
    color: ${({ theme }) => theme.colors.secondaryInvert};
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

export const NavigationContainer = styled.div``;

export const Navigation = styled(animated.div)`
  background-color: ${({ theme }) => rgba(lighten(0.08, theme.colors.primaryInvert), 0.9)};
  position: fixed;
  z-index: 999;
  transition: backdrop-filter 100ms;
  backdrop-filter: blur(5px) grayscale(0.15);
  overflow: hidden;
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
  background: ${({ theme }) => theme.colors.primaryInvert};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
  transition: all 400ms;
  &:hover,
  &:focus {
    box-shadow: 0 1px 18px ${({ theme }) => rgba(theme.colors.primary, 0.08)};
  }
`;

export const Link = styled(LinkComponent)`
  ${button}
`;

export const Menu = styled.ul`
  list-style: none;
  padding: 0;
  padding-top: ${modularScale(6)};
`;

export const MenuItem = styled(animated.li)`
  list-style: none;
  margin-bottom: ${modularScale(-1)};
`;

export const MenuIcon = styled(StyledMenuIcon)``;

export default { NavigationContainer, Navigation, ToggleButton, Link, Menu, MenuItem, MenuIcon };
