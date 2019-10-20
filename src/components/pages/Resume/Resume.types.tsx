import { Jobs, Personal, Skills, Technologies, Software, Educations, Trainings, Languages, Hobbies } from 'api/resume';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ResumeContainerProps {}

export interface ResumeProps {
  personal: Personal;
  skills: Skills;
  technical: Technologies;
  software: Software;
  education: Educations;
  training: Trainings;
  languages: Languages;
  hobbies: Hobbies;
  jobs: Jobs;
}
