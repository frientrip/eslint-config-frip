// https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin
module.exports = {
  extends: ['plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/ban-ts-comment': 1,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-shadow': 0,
    '@typescript-eslint/dot-notation': 0,
    '@typescript-eslint/lines-between-class-members': 0,
    '@typescript-eslint/no-redeclare': 0,
    '@typescript-eslint/comma-dangle': 0,
    '@typescript-eslint/no-loop-func': 0,
    '@typescript-eslint/naming-convention': [
      'error',
      {
        // TODO: enum 의 key 값은 uppercase 가 더 낫지 않나 하는 의견, 고민..
        selector: 'enumMember',
        format: ['PascalCase'],
      },
    ],
  },
};
