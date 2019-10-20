import React from 'react';

import { boolean, number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Project from './Project';

storiesOf('Project', module).add('Project', () => {
  return <Project name="Lorem ipsum" />;
});
