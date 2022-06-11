module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/typescrip'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': ['error'],
  },
};
