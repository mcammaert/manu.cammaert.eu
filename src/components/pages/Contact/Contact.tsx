import React from 'react';

import { Default } from 'components/templates/Default';

import { ContactProps } from './Contact.types';

import S from './Contact.style';

const Contact: React.FC<ContactProps> = () => (
  <S.Contact>
    <Default>
      <p>Contact</p>
    </Default>
  </S.Contact>
);

export default Contact;
