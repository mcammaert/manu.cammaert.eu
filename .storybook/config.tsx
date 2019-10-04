import { configure } from '@storybook/react';

const req = require.context('../src', true, /\.stories\.tsx$/);

function loadStories() {
  console.info(req);
  req.keys().forEach(req);
}

configure(loadStories, module);
