import styled from 'styled-components';
import { rgba, modularScale } from 'polished';

export const Footer = styled.footer`
  position: absolute;
  padding-top: ${modularScale(4)};
  padding-bottom: ${modularScale(4)};
  width: 100vw;
`;

export const CopyrightNotice = styled.div`
  color: ${({ theme }) => rgba(theme.colors.copy, 0.6)};
  font-size: ${modularScale(-0.75)};
  line-height: ${modularScale(2)};
`;

export default { Footer, CopyrightNotice };
