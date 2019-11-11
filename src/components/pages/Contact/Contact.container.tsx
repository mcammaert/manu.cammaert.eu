import React from 'react';

import { getPersonal, getLinks } from 'api/resume';
import Contact from './Contact';

import { ContactContainerProps } from './Contact.types';

const ContactContainer: React.FC<ContactContainerProps> = () => {
  const personal = getPersonal();
  const links = getLinks();
  return <Contact personal={personal} links={links} />;
};

export default ContactContainer;
