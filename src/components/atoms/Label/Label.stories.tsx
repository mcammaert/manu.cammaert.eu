import React from 'react';

import { boolean, number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Label from './Label';

storiesOf('Label', module).add('Label', () => {
  return <Label>Lorem ipsum</Label>;
});
