import React from 'react';

import { ContainerProps } from './Container.types';

import S from './Container.style';

const Container: React.FC<ContainerProps> = ({ children, className, margin = false, padding = false }) => (
  <S.Container margin={margin} className={className}>
    <S.Content padding={padding}>{children}</S.Content>
  </S.Container>
);

export default Container;
