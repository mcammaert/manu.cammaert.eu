import React from 'react';

import { boolean, number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import COMPONENT_NAME from './COMPONENT_NAME';

storiesOf('COMPONENT_NAME', module).add('COMPONENT_NAME', () => {
  return <COMPONENT_NAME />;
});
