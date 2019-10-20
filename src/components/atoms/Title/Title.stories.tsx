import React from 'react';

import { boolean, number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Title from './Title';

storiesOf('Title', module).add('Title', () => {
  return <Title>Lorem ipsum</Title>;
});
