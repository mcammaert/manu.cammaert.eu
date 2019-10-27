import React, { useEffect, useState } from 'react';

import { useInterval } from 'react-use';
import { Link } from 'react-router-dom';

import { Container } from 'components/atoms/Container';
import { Copy } from 'components/atoms/Copy';
import { Default } from 'components/templates/Default';

import { HomeProps } from './Home.types';

import S from './Home.style';

const getSalutation = (hour: number): string => {
  if (hour <= 6) return 'Goede nacht';
  if (hour <= 10) return 'Goede morgen';
  if (hour <= 14) return 'Goede middag';
  if (hour <= 17) return 'Goede namiddag';
  if (hour <= 21) return 'Goede avond';
  return 'Goede nacht';
};

const Home: React.FC<HomeProps> = () => {
  const [hour, setHour] = useState(0);

  useInterval(() => {
    setHour(new Date(Date.now()).getHours());
  }, 10000);

  useEffect(() => {
    setHour(new Date(Date.now()).getHours());
  }, []);

  return (
    <S.Home>
      <Default>
        <Container>
          <Copy margin size={1}>
            {getSalutation(hour)}, ik ben Manu Cammaert, front-end developer / designer met een passie voor
            <span> </span>
            <abbr title="User Interface">UI</abbr>
            <span> </span>
            design en fotografie.
          </Copy>
          <Copy margin>
            Mijn specialisatie ligt momenteel bij React, waarin ook deze website is gebouwd. Je kan de
            <span> </span>
            <a href="https://github.com/mcammaert/manu.cammaert.eu" aria-label="broncode van deze website">
              broncode ervan
            </a>
            <span> </span>
            hier bekijken.
          </Copy>
          <Copy>
            Bekijk hier
            <span> </span>
            <Link to="/cv">
              mijn <abbr title="curriculum vitae">cv</abbr>
            </Link>
            <span> </span>
            of <Link to="/contact">contacteer me</Link> voor vragen.
          </Copy>
        </Container>
      </Default>
    </S.Home>
  );
};

export default Home;
