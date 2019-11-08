import React from 'react';

import moment from 'moment';
import 'moment/locale/nl-be';
import { useSpring } from 'react-spring';
import { useMeasure } from 'react-use';

import { Button } from 'components/atoms/Button';
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
  compact = false,
  className,
  toggleProjectsHandler,
}) => {
  const [collapseContent, { height: contentHeight }] = useMeasure();

  const projectsAnimation = useSpring({
    from: { height: 0, opacity: 0 },
    to: { height: !compact ? contentHeight : 0, opacity: !compact ? 1 : 0 },
  });

  const years = moment(endDate).diff(startDate, 'years');
  const months = moment(endDate)
    .subtract(years, 'years')
    .diff(startDate, 'months');

  return (
    <S.Job className={className}>
      <S.TitleContainer>
        <Title size={2} header={headerLevel}>
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
            <S.DateSegment>
              {`Van ${moment(startDate).format('LL')}`}
              {` tot ${moment(endDate).format('LL')}`}
            </S.DateSegment>
          </>
        )}
        {!endDate && (
          <>
            Sinds <S.DateSegment>{moment(startDate).format('LL')}</S.DateSegment>
          </>
        )}
        <S.TimeAgo>
          ({years > 0 && `${years} jaar`}
          {years > 0 && months > 0 && <span> en </span>}
          {months > 0 && `${months} ${months === 1 ? 'maand' : 'maanden'}`})
        </S.TimeAgo>
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
          <Button onClick={toggleProjectsHandler}>{compact ? 'Toon projecten' : 'Verberg projecten'}</Button>
          <S.Projects style={projectsAnimation}>
            <S.ProjectContainer ref={collapseContent}>
              {projects.map(({ name }) => (
                <ProjectContainer key={name} client={id} project={name} headerLevel={headerLevel + 1} visible={!compact} />
              ))}
            </S.ProjectContainer>
          </S.Projects>
        </>
      )}
    </S.Job>
  );
};

export default Job;
