import React from 'react';

import { LoadingProps } from './Loading.types';

import S from './Loading.style';

const Loading: React.FC<LoadingProps> = () => (
  <S.Loading>
    <p>Laden...</p>
  </S.Loading>
);

export default Loading;
