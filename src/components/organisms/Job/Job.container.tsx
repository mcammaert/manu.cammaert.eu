import React from 'react';

import { getJob } from 'api/resume';
import Job from './Job';

import { JobContainerProps } from './Job.types';

const JobContainer: React.FC<JobContainerProps> = ({ client: inputClient }) => {
  const job = getJob(inputClient);
  if (job) {
    const { client, description, startDate, endDate, roles, projects } = job;
    return <Job client={client} description={description} startDate={startDate} endDate={endDate} roles={roles} projects={projects} />;
  }
  return <></>;
};

export default JobContainer;
