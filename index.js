module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
    'no-await-in-loop': 'off',
    'no-plusplus': 'off',
    'padded-blocks': ['error', 'always'],
    radix: ['error', 'as-needed'],
  },
};
