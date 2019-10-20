import React from 'react';

import { ScreenReaderOnly } from 'components/atoms/ScreenReaderOnly';
import { Title } from 'components/atoms/Title';

import { ProjectProps } from './Project.types';

import S from './Project.style';

const Project: React.FC<ProjectProps> = ({ name, roles, description, technologies, references, headerLevel = 2 }) => (
  <S.Project>
    <S.Title size={1} header={headerLevel}>
      {name}
    </S.Title>

    {roles && (
      <>
        <ScreenReaderOnly>
          <Title header={headerLevel + 1}>Rollen</Title>
        </ScreenReaderOnly>
        <S.Roles as="ul">
          {roles.map(role => (
            <S.Role key={role} as="li">
              {role}
            </S.Role>
          ))}
        </S.Roles>
      </>
    )}
    {technologies && (
      <>
        <ScreenReaderOnly>
          <Title header={headerLevel + 1}>Technologiën</Title>
        </ScreenReaderOnly>
        <S.Technologies as="ul">
          {technologies.map(technology => (
            <S.Technology key={technology} as="li">
              <S.Label>{technology}</S.Label>
            </S.Technology>
          ))}
        </S.Technologies>
      </>
    )}

    {description && (
      <>
        <ScreenReaderOnly>
          <Title header={headerLevel + 1}>Omschrijving</Title>
        </ScreenReaderOnly>
        <S.Description>{description}</S.Description>
      </>
    )}
    {references && (
      <>
        <ScreenReaderOnly>
          <Title header={headerLevel + 1}>Rollen</Title>
        </ScreenReaderOnly>
        <S.References as="ul">
          {references.map(reference => (
            <S.Reference key={reference} as="li">
              <a href={reference}>{reference.replace(/^http(s)?:\/\//i, '')}</a>
            </S.Reference>
          ))}
        </S.References>
      </>
    )}
  </S.Project>
);

export default Project;
