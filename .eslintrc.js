module.exports = {
  extends: ['eslint:recommended', 'airbnb', 'prettier'],
  plugins: ['html', 'prettier', 'react-hooks'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2021,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'no-debugger': 'off',
    'no-alert': 'off',
    'global-require': 'off',
    'no-return-assign': ['error', 'except-parens'],
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'arrow-body-style': ['error', 'as-needed'],
    'no-unused-expressions': [
      'error',
      {
        allowTaggedTemplates: true,
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'no-console': 'off',
    'func-names': 'off',
    'space-before-function-paren': 'off',
    'comma-dangle': 'off',
    'max-len': 'off',
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
    radix: 'off',
    'no-shadow': [
      'error',
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
      },
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    import: 'off',
    'class-methods-use-this': 'off',
    'prefer-arrow-callback': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'react/no-unstable-nested-components': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'warn',
    'react/no-array-index-key': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prefer-stateless-function': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        bracketSpacing: true,
        semi: true,
        singleQuote: true,
        trailingComma: 'es5',
        tabWidth: 2,
        useTabs: false,
      },
    ],
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/accessible-emoji': 'warn',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref'],
      },
    ],
  },
};
