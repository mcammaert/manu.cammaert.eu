import React from 'react';

import {
  getAllJobs,
  getPersonal,
  getAllSkills,
  getAllTechnical,
  getAllSoftware,
  getAllEducation,
  getAllTraining,
  getAllLanguages,
  getAllHobbies,
} from 'api/resume';
import Resume from './Resume';

import { ResumeContainerProps } from './Resume.types';

const ResumeContainer: React.FC<ResumeContainerProps> = () => {
  const jobs = getAllJobs();
  const personal = getPersonal();
  const skills = getAllSkills();
  const technical = getAllTechnical();
  const software = getAllSoftware();
  const education = getAllEducation();
  const training = getAllTraining();
  const languages = getAllLanguages();
  const hobbies = getAllHobbies();

  return (
    <Resume
      jobs={jobs || []}
      personal={personal}
      skills={skills}
      technical={technical}
      software={software}
      education={education}
      training={training}
      languages={languages}
      hobbies={hobbies}
    />
  );
};

export default ResumeContainer;
