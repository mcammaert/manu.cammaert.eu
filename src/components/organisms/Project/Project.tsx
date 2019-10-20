import React from 'react';

import { ScreenReaderOnly } from 'components/atoms/ScreenReaderOnly';

import { ProjectProps } from './Project.types';

import S from './Project.style';

const Project: React.FC<ProjectProps> = ({ name, roles, description, technologies, references }) => (
  <S.Project>
    <S.Title as="h4">{name}</S.Title>
    {roles && (
      <>
        <ScreenReaderOnly>
          <h5>Rollen</h5>
        </ScreenReaderOnly>
        <S.Roles as="ul">
          {roles.map(role => (
            <S.Role as="li">{role}</S.Role>
          ))}
        </S.Roles>
      </>
    )}
    {technologies && (
      <>
        <ScreenReaderOnly>
          <h5>Technologiën</h5>
        </ScreenReaderOnly>
        <S.Technologies as="ul">
          {technologies.map(technology => (
            <S.Technology as="li">{technology}</S.Technology>
          ))}
        </S.Technologies>
      </>
    )}

    {description && (
      <>
        <ScreenReaderOnly>
          <h5>Omschrijving</h5>
        </ScreenReaderOnly>
        <S.Description>{description}</S.Description>
      </>
    )}
    {references && (
      <>
        <ScreenReaderOnly>
          <h5>Rollen</h5>
        </ScreenReaderOnly>
        <S.References as="ul">
          {references.map(reference => (
            <S.Reference as="li">
              <a href={reference}>{reference.replace(/^http(s)?:\/\//i, '')}</a>
            </S.Reference>
          ))}
        </S.References>
      </>
    )}
  </S.Project>
);

export default Project;
