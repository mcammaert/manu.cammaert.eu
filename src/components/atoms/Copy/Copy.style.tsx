import styled from 'styled-components';
import { modularScale } from 'polished';

export const Copy = styled.div`
  font-size: ${modularScale(0)};
  font-weight: 400;
  line-height: ${modularScale(2)};
  color: ${({ theme }) => theme.colors.copy};
`;

export default { Copy };
