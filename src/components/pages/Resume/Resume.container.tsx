import React from 'react';

import { getAllJobs } from 'api/resume';
import Resume from './Resume';

import { ResumeContainerProps } from './Resume.types';

const ResumeContainer: React.FC<ResumeContainerProps> = () => {
  const jobs = getAllJobs();
  return <Resume jobs={jobs || []} />;
};

export default ResumeContainer;
