import React from 'react';

import { ErrorProps } from './Error.types';

import S from './Error.style';

const Error: React.FC<ErrorProps> = () => (
  <S.Error>
    <p>Error</p>
  </S.Error>
);

export default Error;
