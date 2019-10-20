import React from 'react';

import { boolean, number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Progress from './Progress';

storiesOf('Progress', module).add('Progress', () => {
  return <Progress progress={0.6} />;
});
