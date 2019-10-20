import React from 'react';

import moment from 'moment';
import 'moment/locale/nl-be';

import { Container } from 'components/atoms/Container';
import { ScreenReaderOnly } from 'components/atoms/ScreenReaderOnly';
import { ProjectContainer } from 'components/organisms/Project';

import { Title } from 'components/atoms/Title';

import { JobProps } from './Job.types';

import S from './Job.style';

const Job: React.FC<JobProps> = ({
  client,
  id,
  startDate,
  endDate,
  description,
  roles,
  projects,
  displayProjects = false,
  headerLevel = 1,
}) => (
  <Container>
    <S.Job>
      <S.TitleContainer>
        <Title size={3} header={headerLevel}>
          {client}
        </Title>
      </S.TitleContainer>
      {roles && (
        <>
          <ScreenReaderOnly>
            <Title header={headerLevel + 1}>Rollen</Title>
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
            <Title header={headerLevel + 1}>Omschrijving</Title>
          </ScreenReaderOnly>
          <S.Description>{description}</S.Description>
        </>
      )}
      {displayProjects && projects && (
        <>
          <ScreenReaderOnly>
            <Title header={headerLevel + 1}>Projecten</Title>
          </ScreenReaderOnly>
          {projects.map(({ name }) => (
            <ProjectContainer key={name} client={id} project={name} headerLevel={headerLevel + 1} />
          ))}
        </>
      )}
    </S.Job>
  </Container>
);

export default Job;
