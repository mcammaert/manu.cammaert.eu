import styled from 'styled-components';
import { rgba, modularScale } from 'polished';

export const Table = styled.table`
  width: 100%;
  margin-bottom: ${modularScale(0)};

  th {
    font-size: ${modularScale(-1)};
    text-align: left;
    padding: ${modularScale(-2)};
    font-weight: 400;
    text-transform: uppercase;
  }
  td {
    font-size: ${modularScale(0)};
    border-top: 1px solid ${({ theme }) => rgba(theme.colors.primary, 0.08)};
    padding: ${modularScale(-2)};
  }
`;

export default { Table };
