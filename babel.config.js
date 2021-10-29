// Currently only used by Jest for testing
module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-typescript'],
  plugins: ['@babel/plugin-transform-modules-commonjs'],
};
