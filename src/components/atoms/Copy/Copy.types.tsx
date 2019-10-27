import { ReactNode } from 'react';

export interface CopyProps {
  children: ReactNode | string;
  margin?: boolean;
  className?: string;
}
