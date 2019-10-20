import styled from 'styled-components';
import { lighten, modularScale } from 'polished';

export const Footer = styled.footer`
  position: absolute;
  font-size: ${modularScale(-1)}
  color: ${({ theme }) => lighten(0.25, theme.colors.copy)}
  padding-top: ${modularScale(6)};
  padding-bottom: ${modularScale(6)};
  width: 100vw;
`;

export const CopyrightNotice = styled.div``;

export default { Footer, CopyrightNotice };
