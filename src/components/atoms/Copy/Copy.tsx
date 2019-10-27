import React from 'react';

import { CopyProps } from './Copy.types';

import S from './Copy.style';

const Copy: React.FC<CopyProps> = ({ children, className, margin = false }) => (
  <S.Copy className={className} margin={margin}>
    {children}
  </S.Copy>
);

export default Copy;
