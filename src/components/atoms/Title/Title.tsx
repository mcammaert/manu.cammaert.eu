import React from 'react';

import { TitleProps } from './Title.types';

import S from './Title.style';

const Title: React.FC<TitleProps> = ({ children, className, size = 1, header = 1 }) => (
  <S.Title size={size} as={`h${header}` as keyof JSX.IntrinsicElements} className={className}>
    {children}
  </S.Title>
);

export default Title;
