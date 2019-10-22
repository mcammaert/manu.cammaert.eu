import styled from 'styled-components';
import { modularScale } from 'polished';

import { Title as StyledTitle } from 'components/atoms/Title';

export const Header = styled.div`
  margin-top: ${modularScale(6)};
  margin-bottom: ${modularScale(2)};
`;

export const Title = styled(StyledTitle)``;

export default { Header, Title };
