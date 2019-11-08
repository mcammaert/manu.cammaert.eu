import React from 'react';

import { Switch, Route, useLocation } from 'react-router-dom';
import loadable from '@loadable/component';
import pMinDelay from 'p-min-delay';
import { useTransition, animated } from 'react-spring';

import { Header } from 'components/organisms/Header';
import { Loading as LoadingComponent } from 'components/molecules/Loading';
import { Container } from 'components/atoms/Container';
import { Error as ErrorPage } from 'components/pages/Error';

import { RouterProps } from './Router.types';

const fallbackTimeout = 20;

const Loading = () => (
  <Container>
    <LoadingComponent />
  </Container>
);

const Home = loadable(() => pMinDelay(import('components/pages/Home/Home'), fallbackTimeout), {
  fallback: <Loading />,
});
const Resume = loadable(() => pMinDelay(import('components/pages/Resume/Resume.container'), fallbackTimeout), {
  fallback: <Loading />,
});
const Contact = loadable(() => pMinDelay(import('components/pages/Contact/Contact'), fallbackTimeout), {
  fallback: <Loading />,
});
const PageNotFound = () => <ErrorPage message="Pagina niet gevonden." />;

const Router: React.FC<RouterProps> = () => {
  const location = useLocation();

  const transitions = useTransition(location, loc => loc.pathname, {
    from: { opacity: 0, transform: 'translate3d(-20px, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(-20px, 0, 0)' },
  });

  return (
    <>
      <Header />
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route path="/cv" exact component={Resume} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/" exact component={Home} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </animated.div>
      ))}
    </>
  );
};

export default Router;
