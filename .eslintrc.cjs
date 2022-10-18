module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'unicorn'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  ignorePatterns: ['.eslintrc.cjs', 'lint-staged.config.cjs'],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:security/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier'
  ],
  rules: {
    'react/jsx-one-expression-per-line': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/require-default-props': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/no-unused-prop-types': 'off',
    'react/no-unstable-nested-comp': 'off',
    'react/no-unstable-nested-components': 'off',
    'no-restricted-exports': 'off',
    'no-promise-executor-return': 'off',
    'no-plusplus': 'off',
    'arrow-parens': 'off',
    'no-redeclare': 'off',
    'no-unused-vars': 'off',
    'consistent-return': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'operator-linebreak': [2, 'after'],
    'no-confusing-arrow': 'off',
    'object-curly-newline': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/prefer-export-from': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-duplicate-imports': 'off',
    'security/detect-object-injection': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/no-redeclare': ['error'],
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-duplicate-imports': ['error'],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info']
      }
    ],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        allowList: {
          props: true,
          params: true,
          queryParams: true,
          getInitialProps: true
        }
      }
    ]
  }
}
