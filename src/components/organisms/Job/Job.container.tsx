import React from 'react';

// import { useLocation } from 'react-router-dom';

import { getJob } from 'api/resume';
import Job from './Job';

import { JobContainerProps } from './Job.types';

const JobContainer: React.FC<JobContainerProps> = ({ id, headerLevel }) => {
  // const location = useLocation();
  const job = getJob(id);
  if (job) {
    const { client, description, startDate, endDate, roles, projects } = job;
    // const regex = new RegExp(`^/cv/${id}`, 'i');
    // const displayProjects = !!location.pathname.match(regex);

    return (
      <Job
        client={client}
        id={id}
        description={description}
        startDate={startDate}
        endDate={endDate}
        roles={roles}
        projects={projects}
        displayProjects
        headerLevel={headerLevel}
      />
    );
  }
  return <></>;
};

export default JobContainer;
