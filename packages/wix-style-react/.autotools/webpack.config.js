const path = require('path');
const { decorateStorybookConfig } = require('yoshi-flow-library/storybook');

module.exports = decorateStorybookConfig({
  context: path.resolve(__dirname, '..'),
  mode: 'development',
  resolve: {
    extensions: [],
  },
});
