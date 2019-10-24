import React from 'react';

import { boolean, number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import MenuIcon from './MenuIcon';

storiesOf('MenuIcon', module).add('MenuIcon', () => {
  return <MenuIcon />;
});
