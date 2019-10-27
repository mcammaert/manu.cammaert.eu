import { ReactNode } from 'react';

export interface CopyProps {
  children: ReactNode | string;
  margin?: boolean;
  size?: number;
  fontWeight?: number;
  className?: string;
}
