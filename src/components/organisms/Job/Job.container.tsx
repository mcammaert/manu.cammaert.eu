import React, { useState } from 'react';

import { getJob } from 'api/resume';
import Job from './Job';

import { JobContainerProps } from './Job.types';

const JobContainer: React.FC<JobContainerProps> = ({ id, headerLevel, className }) => {
  const job = getJob(id);

  const [displayProjects, setDisplayProjects] = useState<boolean>(false);

  const onToggleProjectsHandler = () => {
    setDisplayProjects(!displayProjects);
  };
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
        compact={!displayProjects}
        className={className}
        toggleProjectsHandler={onToggleProjectsHandler}
      />
    );
  }
  return <></>;
};

export default JobContainer;
