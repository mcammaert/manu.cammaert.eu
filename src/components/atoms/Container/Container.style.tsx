import styled from 'styled-components';
import { rem, modularScale } from 'polished';

interface ContainerProps {
  margin: boolean;
}
interface ContentProps {
  padding: boolean;
}
export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ margin }) => (margin ? modularScale(1) : 0)};
`;

export const Content = styled.div<ContentProps>`
  width: 100vw;
  max-width: 800px;
  padding-left: ${({ theme }) => rem(theme.margin)};
  padding-right: ${({ theme }) => rem(theme.margin)};
  margin-top: ${({ padding }) => (padding ? modularScale(1) : 0)};
  margin-bottom: ${({ padding }) => (padding ? modularScale(1) : 0)};
`;

export default { Container, Content };
