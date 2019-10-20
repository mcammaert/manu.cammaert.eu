import React from 'react';

import { ContainerProps } from './Container.types';

import S from './Container.style';

const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <S.Container className={className}>
    <S.Content>{children}</S.Content>
  </S.Container>
);

export default Container;
