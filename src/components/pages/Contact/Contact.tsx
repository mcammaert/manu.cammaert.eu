import React from 'react';

import { SocialIcon } from 'react-social-icons';

import { Container } from 'components/atoms/Container';
import { Title } from 'components/atoms/Title';
import { Default } from 'components/templates/Default';

import { ContactProps } from './Contact.types';

import S from './Contact.style';

const Contact: React.FC<ContactProps> = ({ personal: { name, address, phone, email }, links }) => (
  <S.Contact>
    <Default>
      <Container>
        <Title size={2} header={2}>
          Contact
        </Title>
        <S.DescriptionList>
          <S.DescriptionListTerm>E-mail</S.DescriptionListTerm>
          <S.DescriptionListDescription>{email}</S.DescriptionListDescription>
          <S.DescriptionListTerm>Telefoon</S.DescriptionListTerm>
          <S.DescriptionListDescription>{phone}</S.DescriptionListDescription>
          <S.DescriptionListTerm>Woonplaats</S.DescriptionListTerm>
          <S.DescriptionListDescription>{address}</S.DescriptionListDescription>
          <S.DescriptionListTerm>GPG</S.DescriptionListTerm>
          <S.DescriptionListDescription>
            <a href={`${process.env.PUBLIC_URL}/gpg/manu.cammaert.gpg`}>Download public key</a>
          </S.DescriptionListDescription>
          <S.DescriptionListDescription></S.DescriptionListDescription>
          <S.DescriptionListTerm>Links</S.DescriptionListTerm>
          {links.map(({ uri, name: network }) => (
            <S.Link key={uri}>
              <SocialIcon url={uri} />
              <S.Label href={uri}>{network}</S.Label>
            </S.Link>
          ))}
        </S.DescriptionList>
      </Container>
    </Default>
  </S.Contact>
);

export default Contact;
