import React from 'react';

import moment from 'moment';
import 'moment/locale/nl-be';

import { Container } from 'components/atoms/Container';
import { ScreenReaderOnly } from 'components/atoms/ScreenReaderOnly';
import { ProjectContainer } from 'components/organisms/Project';

import { JobProps } from './Job.types';

import S from './Job.style';

const Job: React.FC<JobProps> = ({ client, startDate, endDate, description, roles, projects }) => (
  <Container>
    <S.Job>
      <S.TitleContainer>
        <S.Title as="h2">{client}</S.Title>
        <S.Date as="span">
          {endDate && (
            <>
              Van {moment(startDate).format('LL')} tot {moment(endDate).format('LL')}
            </>
          )}
          {!endDate && <>Sinds {moment(startDate).format('LL')}</>}
        </S.Date>
      </S.TitleContainer>
      {roles && (
        <>
          <ScreenReaderOnly>
            <h3>Rollen</h3>
          </ScreenReaderOnly>
          <S.Roles>
            {roles.map(role => (
              <S.Role key={role}>{role}</S.Role>
            ))}
          </S.Roles>
        </>
      )}
      {description && (
        <>
          <ScreenReaderOnly>
            <h3>Omschrijving</h3>
          </ScreenReaderOnly>
          <S.Description>{description}</S.Description>
        </>
      )}
      {projects && (
        <>
          <ScreenReaderOnly>
            <h3>Projecten</h3>
          </ScreenReaderOnly>
          {projects.map(({ name }) => (
            <ProjectContainer client={client} project={name} />
          ))}
        </>
      )}
    </S.Job>
  </Container>
);

export default Job;
