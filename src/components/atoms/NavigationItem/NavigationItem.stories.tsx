import React from 'react';

import { boolean, number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import NavigationItem from './NavigationItem';

storiesOf('NavigationItem', module).add('NavigationItem', () => {
  return <NavigationItem />;
});
