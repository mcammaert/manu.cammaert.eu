import { Personal, Links } from 'api/resume';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ContactContainerProps {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ContactProps {
  personal: Personal;
  links: Links;
}
