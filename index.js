// https://eslint.org/docs/user-guide/getting-started

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:import/typescript',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    ...[
      './rules/base',
      './rules/import',
      './rules/prettier',
      './rules/typescript',
    ].map(require.resolve),
  ],
};
