import styled from 'styled-components';
import { rgba, modularScale } from 'polished';

export const Footer = styled.footer`
  position: absolute;
  font-size: ${modularScale(-1)}
  padding-top: ${modularScale(6)};
  padding-bottom: ${modularScale(6)};
  width: 100vw;
`;

export const CopyrightNotice = styled.div`
  color: ${({ theme }) => rgba(theme.colors.copy, 0.45)};
`;

export default { Footer, CopyrightNotice };
