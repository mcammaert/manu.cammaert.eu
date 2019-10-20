export type Description = string;

export type Education = string;
export type Educations = Array<Hobby>;

export type Hobby = string;
export type Hobbies = Array<Hobby>;

export interface Language {
  language: string;
  speaking: number;
  writing: number;
  native: boolean;
}
export type Languages = Array<Language>;

export type ProjectReference = string;
export type ProjectReferences = Array<ProjectReference>;

export interface Reference {
  name: string;
}
export type References = Array<Reference>;

export type Role = string;
export type Roles = Array<Role>;

export type Skill = string;
export type Skills = Array<Skill>;

export type Tag = string;
export type Tags = Array<Tag>;

export type Technology = string;
export type Technologies = Array<Technology>;

export type Training = string;
export type Trainings = Array<Training>;

export interface Personal {
  name: string;
  nationality: string;
  birthDate: string;
  address: string;
  email: string;
}

export interface Project {
  name: string;
  roles?: Roles;
  description?: Description;
  references?: ProjectReferences;
  technologies?: Technologies;
  tags?: Tags;
}
export type Projects = Array<Project>;

export type Package = string;
export type Software = Array<Package>;

export interface Job {
  client: string;
  id: string;
  description?: Description;
  startDate: string;
  endDate?: string;
  roles?: Roles;
  references?: References;
  projects?: Projects;
}
export type Jobs = Array<Job>;

export interface Resume {
  personal: Personal;
  skills: Skills;
  technical: Technologies;
  software: Software;
  education: Educations;
  training: Trainings;
  languages: Languages;
  hobbies: Hobbies;
  career: Jobs;
}
