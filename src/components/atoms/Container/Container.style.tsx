import styled from 'styled-components';
import { rem } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100vw;
  max-width: 800px;
  padding-left: ${({ theme }) => rem(theme.margin)};
  padding-right: ${({ theme }) => rem(theme.margin)};
`;

export default { Container, Content };
