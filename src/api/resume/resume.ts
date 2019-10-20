import resume from 'data/resume.json';

import { Personal, Skills, Technologies, Software, Educations, Trainings, Languages, Hobbies, Jobs, Job, Project } from './resume.types';

export const getPersonal = (): Personal => resume.personal;

export const getAllSkills = (): Skills => resume.skills;

export const getAllTechnical = (): Technologies => resume.technical;

export const getAllSoftware = (): Software => resume.software;

export const getAllEducation = (): Educations => resume.education;

export const getAllTraining = (): Trainings => resume.training;

export const getAllLanguages = (): Languages => resume.languages;

export const getAllHobbies = (): Hobbies => resume.hobbies;

export const getAllJobs = (): Jobs => resume.career.sort((a, b) => (a.startDate < b.startDate ? 1 : -1));

export const getJob = (id: string): Job | undefined => resume.career.find(job => job.id === id);

export const getProject = (client: string, projectName: string): Project | undefined => {
  const job = resume.career.find(({ id }) => id === client);
  if (job) return job.projects.find(project => project.name === projectName);
  return undefined;
};
