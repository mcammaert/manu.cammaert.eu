import React from 'react';

import { Default } from 'components/templates/Default';

import { ResumeProps } from './Resume.types';

import S from './Resume.style';

const Resume: React.FC<ResumeProps> = () => (
  <S.Resume>
    <Default>
      <p>Curriculum Vitae</p>
    </Default>
  </S.Resume>
);

export default Resume;
