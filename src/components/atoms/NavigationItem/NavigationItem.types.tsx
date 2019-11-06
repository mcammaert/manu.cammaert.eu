import { MouseEvent } from 'react';

export interface NavigationItemProps {
  onClick?: (e: MouseEvent) => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
}
