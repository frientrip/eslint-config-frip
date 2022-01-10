module.exports = {
  extends: [
    './index.js',
    'airbnb/hooks',
    ...['./rules/react', './rules/react-hooks'].map(require.resolve),
  ],
};
