import React from 'react';

import { Helmet } from 'react-helmet';

import { Default } from 'components/templates/Default';
import { Container } from 'components/atoms/Container';
import { JobContainer } from 'components/organisms/Job';
import { Table } from 'components/organisms/Table';
import { Title } from 'components/atoms/Title';
import { Label } from 'components/atoms/Label';
import { Progress } from 'components/atoms/Progress';

import { ResumeProps } from './Resume.types';

import S from './Resume.style';

const Resume: React.FC<ResumeProps> = ({
  personal: { name, nationality, address, email },
  jobs,
  skills,
  technical,
  software,
  education: educations,
  training: trainings,
  languages,
  hobbies,
}) => {
  return (
    <S.Resume>
      <Helmet>
        <title>CV | Manu Cammaert</title>
      </Helmet>
      <Default>
        <main>
          <Container margin>
            <Title size={2} header={2}>
              Persoonlijke gegevens
            </Title>
            <S.DescriptionList>
              <S.DescriptionListTerm>Naam</S.DescriptionListTerm>
              <S.DescriptionListDescription>{name}</S.DescriptionListDescription>
              <S.DescriptionListTerm>Nationaliteit</S.DescriptionListTerm>
              <S.DescriptionListDescription>{nationality}</S.DescriptionListDescription>
              <S.DescriptionListTerm>Woonplaats</S.DescriptionListTerm>
              <S.DescriptionListDescription>{address}</S.DescriptionListDescription>
              <S.DescriptionListTerm>E-mail</S.DescriptionListTerm>
              <S.DescriptionListDescription>{email}</S.DescriptionListDescription>
            </S.DescriptionList>
          </Container>
          <Container margin>
            <Title size={2} header={2}>
              Vaardigheden
            </Title>
            <S.LabelList>
              {skills.map(skill => (
                <S.LabelListItem key={skill}>
                  <Label key={skill}>{skill}</Label>
                </S.LabelListItem>
              ))}
            </S.LabelList>
          </Container>
          <Container margin>
            <Title size={2} header={2}>
              Technologiën
            </Title>
            <S.LabelList>
              {technical.map(technology => (
                <S.LabelListItem key={technology}>
                  <Label key={technology}>{technology}</Label>
                </S.LabelListItem>
              ))}
            </S.LabelList>
          </Container>
          <Container margin>
            <Title size={2} header={2}>
              Software
            </Title>
            <S.LabelList>
              {software.map(softwarePackage => (
                <S.LabelListItem key={softwarePackage}>
                  <Label key={softwarePackage}>{softwarePackage}</Label>
                </S.LabelListItem>
              ))}
            </S.LabelList>
          </Container>
          <Container margin>
            <Title size={2} header={2}>
              Opleidingen en training
            </Title>
            <Title size={0} header={3}>
              Opleidingen
            </Title>
            <S.LabelList>
              {educations.map(education => (
                <S.LabelListItem key={education}>
                  <Label key={education}>{education}</Label>
                </S.LabelListItem>
              ))}
            </S.LabelList>
            <Title size={0} header={3}>
              Training
            </Title>
            <S.LabelList>
              {trainings.map(training => (
                <S.LabelListItem key={training}>
                  <Label key={training}>{training}</Label>
                </S.LabelListItem>
              ))}
            </S.LabelList>
          </Container>
          <Container margin>
            <Title size={2} header={2}>
              Talen
            </Title>
            <Table>
              <thead>
                <tr>
                  <th style={{ width: '20%' }}>Taal</th>
                  <th>Gesproken</th>
                  <th>Geschreven</th>
                </tr>
              </thead>
              <tbody>
                {languages.map(({ language, speaking, writing, native }) => (
                  <tr key={language}>
                    <td style={{ width: '20%' }}>{`${language} ${native ? '(moedertaal)' : ''}`}</td>
                    <td>
                      <Progress progress={speaking} />
                    </td>
                    <td>
                      <Progress progress={writing} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
          <Container margin>
            <Title size={2} header={2}>
              Hobbies
            </Title>
            <S.LabelList>
              {hobbies.map(hobby => (
                <S.LabelListItem key={hobby}>
                  <Label key={hobby}>{hobby}</Label>
                </S.LabelListItem>
              ))}
            </S.LabelList>
          </Container>
          <Container margin>
            <Title size={2} header={2}>
              Loopbaan
            </Title>
            <S.Jobs>
              {jobs.map(({ id }) => (
                <S.Job key={id}>
                  <JobContainer id={id} headerLevel={3} compact />
                </S.Job>
              ))}
            </S.Jobs>
          </Container>
        </main>
      </Default>
    </S.Resume>
  );
};

export default Resume;
