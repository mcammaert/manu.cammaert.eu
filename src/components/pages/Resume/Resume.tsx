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
          {jobs.map(({ client, id }) => (
            <JobContainer key={id} id={id} />
          ))}
        </main>
      </Default>
    </S.Resume>
  );
};

export default Resume;
