import React from 'react';

import { ScreenReaderOnlyProps } from './ScreenReaderOnly.types';

import S from './ScreenReaderOnly.style';

const ScreenReaderOnly: React.FC<ScreenReaderOnlyProps> = ({ children }) => <S.ScreenReaderOnly>{children}</S.ScreenReaderOnly>;

export default ScreenReaderOnly;
