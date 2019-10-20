import React from 'react';

import { ProjectProps } from './Project.types';

import S from './Project.style';

const Project: React.FC<ProjectProps> = ({ name, roles, description, technologies, references }) => (
  <S.Project>
    <S.Title as="h5">{name}</S.Title>
    {roles && (
      <S.Roles as="ul">
        {roles.map(role => (
          <S.Role as="li">{role}</S.Role>
        ))}
      </S.Roles>
    )}
    {technologies && (
      <S.Technologies as="ul">
        {technologies.map(technology => (
          <S.Technology as="li">{technology}</S.Technology>
        ))}
      </S.Technologies>
    )}
    {description && <S.Description>{description}</S.Description>}
    {references && (
      <S.References as="ul">
        {references.map(reference => (
          <S.Reference as="li">
            <a href={reference}>{reference.replace(/^http(s)?:\/\//i, '')}</a>
          </S.Reference>
        ))}
      </S.References>
    )}
  </S.Project>
);

export default Project;
