import styled from 'styled-components';
import { modularScale } from 'polished';

interface CopyProps {
  margin: boolean;
}

export const Copy = styled.div<CopyProps>`
  font-size: ${modularScale(0)};
  font-weight: 400;
  line-height: ${modularScale(2)};
  color: ${({ theme }) => theme.colors.copy};
  margin-bottom: ${({ margin }) => (margin ? modularScale(0) : 0)};
`;

export default { Copy };
