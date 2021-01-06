require('@babel/register')({
  presets: [[require.resolve('babel-preset-yoshi')]],
});
require('yoshi-runtime').wixCssModulesRequireHook('./src');
require('@stylable/node').attachHook();
