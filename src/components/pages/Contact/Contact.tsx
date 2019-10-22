import React from 'react';

import { Container } from 'components/atoms/Container';
import { Default } from 'components/templates/Default';

import { ContactProps } from './Contact.types';

import S from './Contact.style';

const Contact: React.FC<ContactProps> = () => (
  <S.Contact>
    <Default>
      <Container>
        <p>Contact</p>
      </Container>
    </Default>
  </S.Contact>
);

export default Contact;
