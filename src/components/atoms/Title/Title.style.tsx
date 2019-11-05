import styled from 'styled-components';
import { modularScale } from 'polished';

interface TitleProps {
  size: number;
}

export const Title = styled.div<TitleProps>`
  font-size: ${({ size }) => modularScale(size)};
  line-height: ${modularScale(0)};
  font-weight: 200;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  margin-bottom: ${modularScale(-3)};
`;

export default { Title };
