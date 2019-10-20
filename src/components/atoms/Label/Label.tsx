import React from 'react';

import { LabelProps } from './Label.types';

import S from './Label.style';

const Label: React.FC<LabelProps> = ({ children, className }) => <S.Label className={className}>{children}</S.Label>;

export default Label;
