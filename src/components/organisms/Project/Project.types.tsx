import { Project } from 'api/resume/resume.types';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProjectProps extends Project {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProjectContainerProps {
  client: string;
  project: string;
}
