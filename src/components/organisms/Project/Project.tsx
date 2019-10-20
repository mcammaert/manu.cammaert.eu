import React from 'react';

import { ScreenReaderOnly } from 'components/atoms/ScreenReaderOnly';

import { ProjectProps } from './Project.types';

import S from './Project.style';

const Project: React.FC<ProjectProps> = ({ name, roles, description, technologies, references }) => (
  <S.Project>
    <S.Title as="h5">{name}</S.Title>
    {roles && (
      <>
        <ScreenReaderOnly>
          <h6>Rollen</h6>
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
          <h6>Technologiën</h6>
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
          <h6>Omschrijving</h6>
        </ScreenReaderOnly>
        <S.Description>{description}</S.Description>
      </>
    )}
    {references && (
      <>
        <ScreenReaderOnly>
          <h6>Rollen</h6>
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
