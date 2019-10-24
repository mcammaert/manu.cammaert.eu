import styled from 'styled-components';

export const MenuIcon = styled.svg`
  transform: ${({ r = 0 }) => `rotate(${r}deg)`};
`;

export const Line = styled.line`
  stroke: ${({ theme }) => theme.colors.primary};
  stroke-width: 2;
`;

export default { MenuIcon, Line };
