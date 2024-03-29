import { Roles } from 'api/resume';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface JobProps {
  client: string;
  id: string;
  description?: string;
  startDate: string;
  endDate?: string;
  roles?: Roles;
  projects?: Array<{ name: string }>;
  displayProjects?: boolean;
  headerLevel?: number;
  compact?: boolean;
  className?: string;
  toggleProjectsHandler: () => void;
}

export interface JobContainerProps {
  id: string;
  headerLevel?: number;
  compact?: boolean;
  className?: string;
}
