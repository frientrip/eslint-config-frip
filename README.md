# @frip/eslint-config-frip

`Frip Web Frontend`의 커스텀 ESLint입니다.

Typescript, React 환경에 맞추어져 있으며, 기존 프로젝트와 의존된 부분이 많아 현재 범용성있게 사용할 순 없으나 추후 지속적으로 발전시킬 예정입니다.

[Airbnb ESLint](https://www.npmjs.com/package/eslint-config-airbnb)룰을 기본으로 채택하고 있으며, 필요시 추가 및 제거하는 방향으로 구성하고 있습니다.

## 설치

```bash
$ npm i -D @frip/eslint-config-frip
```

## 사용

### Javascript or Typescript

```javascript
// .eslintrc or .eslintrc.json

{
    "root": true,
    "extends": ["@frip/eslint-config-frip"],
    parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
      project: './tsconfig.json',
    },
    settings: {
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
}
```

### react

```javascript
// .eslintrc or .eslintrc.json

{
    "root": true,
    "extends": ["@frip/eslint-config-frip/react"],
    "rules": {
      // 추가할 커스텀 훅 작성
    }
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
}
```

`package.json`에 다음 스크립트를 추가해주세요.

```json
{
  "lint": "eslint './**/*.{js,ts,tsx}'",
  "lint:fix": "npm run lint -- --fix"
}
```

### prettier

```javascript
// .prettierrc

'@frip/eslint-config-frip/prettierrc';
```

`package.json`에 다음 스크립트를 추가해주세요.

```json
{
  "prettier": "prettier '**/*.{json,yaml,md}' --check",
  "prettier:fix": "prettier '**/*.{json,yaml,md}' --write"
}
```

### stylelint

```javascript
// .stylelintrc or .stylelintrc.json

{
    "root": true,
    "extends": ["@frip/eslint-config-frip/stylelint"],
}
```

`package.json`에 다음 스크립트를 추가해주세요.

```json
{
  "lint:style": "stylelint './**/*.{js,ts,tsx}'",
  "lint:style:fix": "stylelint './**/*.{js,ts,tsx}' --fix"
}
```
