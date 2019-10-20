import React from 'react';

import { ProgressProps } from './Progress.types';

import S from './Progress.style';

const Progress: React.FC<ProgressProps> = ({ progress, className }) => (
  <S.Progress className={className}>
    <S.Bar progress={progress} />
  </S.Progress>
);

export default Progress;
