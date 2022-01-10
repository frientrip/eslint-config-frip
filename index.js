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
  env: {
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    jsx: true,
    useJSXTextNode: true,
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    /**
     * import plugin with Typescript configuration
     * https://github.com/alexgorbatchev/eslint-import-resolver-typescript#configuration
     */
    'import/resolver': {
      webpack: {
        config: './internals/webpack/webpack.prod.babel.js',
      },
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        directory: './tsconfig.json',
      },
    },
    'import/ignore': ['types', 'node_module'], // Weirdly eslint cannot resolve exports in types folder (try removing this later)
  },
};
