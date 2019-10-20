import React from 'react';

import { Default } from 'components/templates/Default';

import { JobContainer } from 'components/organisms/Job';

import { ResumeProps } from './Resume.types';

import S from './Resume.style';

const Resume: React.FC<ResumeProps> = ({ jobs }) => {
  return (
    <S.Resume>
      <Default>
        {jobs.map(({ client }) => (
          <JobContainer key={client} client={client} />
        ))}
      </Default>
    </S.Resume>
  );
};

export default Resume;
