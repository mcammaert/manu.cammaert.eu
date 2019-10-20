import React from 'react';

import { boolean, number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Container from './Container';

storiesOf('Container', module).add('Container', () => {
  return <Container />;
});
