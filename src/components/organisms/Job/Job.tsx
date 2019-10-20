import React from 'react';

import moment from 'moment';
import 'moment/locale/nl-be';

import { Container } from 'components/atoms/Container';
import { ScreenReaderOnly } from 'components/atoms/ScreenReaderOnly';
import { ProjectContainer } from 'components/organisms/Project';

import { JobProps } from './Job.types';

import S from './Job.style';

const Job: React.FC<JobProps> = ({ client, id, startDate, endDate, description, roles, projects, displayProjects = false }) => (
  <Container>
    <S.Job>
      <S.TitleContainer>
        <S.Title as="h3">{client}</S.Title>
      </S.TitleContainer>
      {roles && (
        <>
          <ScreenReaderOnly>
            <h4>Rollen</h4>
          </ScreenReaderOnly>
          <S.Roles>
            {roles.map(role => (
              <S.Role key={role}>{role}</S.Role>
            ))}
          </S.Roles>
        </>
      )}
      <S.Date as="span">
        {endDate && (
          <>
            <S.DateSegment>{`Van ${moment(startDate).format('LL')}`}</S.DateSegment>
            <S.DateSegment>{` tot ${moment(endDate).format('LL')}`}</S.DateSegment>
          </>
        )}
        {!endDate && (
          <>
            Sinds <S.DateSegment>{moment(startDate).format('LL')}</S.DateSegment>
          </>
        )}
      </S.Date>
      {description && (
        <>
          <ScreenReaderOnly>
            <h4>Omschrijving</h4>
          </ScreenReaderOnly>
          <S.Description>{description}</S.Description>
        </>
      )}
      {displayProjects && projects && (
        <>
          <ScreenReaderOnly>
            <h4>Projecten</h4>
          </ScreenReaderOnly>
          {projects.map(({ name }) => (
            <ProjectContainer key={name} client={id} project={name} />
          ))}
        </>
      )}
    </S.Job>
  </Container>
);

export default Job;
