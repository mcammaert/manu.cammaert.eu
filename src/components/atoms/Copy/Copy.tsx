import React from 'react';

import { CopyProps } from './Copy.types';

import S from './Copy.style';

const Copy: React.FC<CopyProps> = ({ children, className, margin = false, size = 0, fontWeight = 200 }) => (
  <S.Copy className={className} margin={margin} size={size} fontWeight={fontWeight}>
    {children}
  </S.Copy>
);

export default Copy;
