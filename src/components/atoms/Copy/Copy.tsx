import React from 'react';

import { CopyProps } from './Copy.types';

import S from './Copy.style';

const Copy: React.FC<CopyProps> = ({ children, className }) => <S.Copy className={className}>{children}</S.Copy>;

export default Copy;
