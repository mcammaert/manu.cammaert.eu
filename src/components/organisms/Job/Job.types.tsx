import { Roles } from 'api/resume';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface JobProps {
  client: string;
  description?: string;
  startDate: string;
  endDate?: string;
  roles?: Roles;
  projects?: Array<{ name: string }>;
}

export interface JobContainerProps {
  client: string;
}
