module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-typescript', 'plugin:prettier/recommended', 'plugin:import/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    allowComputed: 'off',
    indent: 'off',
    'react/no-danger': 'off',
    'no-console': 'error',
    'prettier/prettier': 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
  },
};
