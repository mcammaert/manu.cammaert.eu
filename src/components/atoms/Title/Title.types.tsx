import { ReactNode } from 'react';

export interface TitleProps {
  children: ReactNode | string;
  className?: string;
  header?: number;
  size?: number;
}
