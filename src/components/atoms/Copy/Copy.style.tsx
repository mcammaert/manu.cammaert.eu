import styled from 'styled-components';
import { modularScale } from 'polished';

interface CopyProps {
  margin: boolean;
  fontWeight: number;
  size: number;
}

export const Copy = styled.div<CopyProps>`
  font-size: ${({ size }) => modularScale(size)};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${modularScale(2)};
  color: ${({ theme }) => theme.colors.copy};
  margin-bottom: ${({ margin }) => (margin ? modularScale(0) : 0)};
`;

export default { Copy };
