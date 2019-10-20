import React from 'react';

import { Default } from 'components/templates/Default';

import { JobContainer } from 'components/organisms/Job';

import { ResumeProps } from './Resume.types';

import S from './Resume.style';

const Resume: React.FC<ResumeProps> = ({ jobs }) => {
  return (
    <S.Resume>
      <Default>
        <main>
          <h2>Carrière</h2>
          {jobs.map(({ client }) => (
            <JobContainer key={client} client={client} />
          ))}
        </main>
      </Default>
    </S.Resume>
  );
};

export default Resume;
