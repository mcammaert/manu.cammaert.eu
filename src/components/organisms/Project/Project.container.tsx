import React from 'react';

import { getProject } from 'api/resume';
import Project from './Project';

import { ProjectContainerProps } from './Project.types';

const ProjectContainer: React.FC<ProjectContainerProps> = ({ project: inputProject, client: inputClient }) => {
  const project = getProject(inputClient, inputProject);
  if (project) {
    const { name, roles, description, references, technologies, tags } = project;
    return <Project name={name} roles={roles} description={description} references={references} technologies={technologies} tags={tags} />;
  }
  return <></>;
};

export default ProjectContainer;
