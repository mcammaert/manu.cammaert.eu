import React from 'react';

import { boolean, number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Copy from './Copy';

storiesOf('Copy', module).add('Copy', () => {
  return <Copy>Lorem ipsum</Copy>;
});
