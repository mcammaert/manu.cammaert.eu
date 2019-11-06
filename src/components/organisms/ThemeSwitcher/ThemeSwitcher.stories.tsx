import React from 'react';

import { boolean, number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import ThemeSwitcher from './ThemeSwitcher';

storiesOf('ThemeSwitcher', module).add('ThemeSwitcher', () => {
  return <ThemeSwitcher />;
});
