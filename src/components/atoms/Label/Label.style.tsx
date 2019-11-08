import styled from 'styled-components';
import { modularScale, rgba } from 'polished';

export const Label = styled.div`
  font-size: ${modularScale(-0.5)};
  line-height: ${modularScale(2)};
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => rgba(theme.colors.secondary, 0.1)};
  border-radius: 1em;
  padding: 0.25em 1em;
  font-weight: 400;
  box-shadow: 0 1px 6px ${({ theme }) => rgba(theme.colors.secondary, 0.01)};
`;

export default { Label };
