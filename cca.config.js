// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  templateName: 'component',
  templatesDirPath: path.resolve(__dirname, 'templates'),
  type: 'custom',
  path: process.env.INIT_CWD,
};
