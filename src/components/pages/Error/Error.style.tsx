import styled from 'styled-components';
import { modularScale, rem } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-left: ${({ theme }) => rem(theme.margin)};
  padding-right: ${({ theme }) => rem(theme.margin)};
`;

export const Error = styled.div``;

export const Title = styled.p`
  font-size: ${modularScale(1)};
  margin-bottom: ${modularScale(0)};
`;

export const Message = styled.p`
  font-size: ${modularScale(0)};
`;

export default { Container, Error, Title, Message };
