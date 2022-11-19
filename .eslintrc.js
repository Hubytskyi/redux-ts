module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    curly: 'error',
    'prefer-arrow-callback': 'error',
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': 'error',
    'quote-props': ['error', 'as-needed'],
    'no-floating-decimal': 'error',
    'func-call-spacing': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-use-before-define': [
      'error',
      {
        functions: false,
        variables: false,
      },
    ],
    'spaced-comment': [
      'warn',
      'always',
      {
        exceptions: ['/', '*'],
      },
    ],
    'block-spacing': 'warn',
    'no-shadow': 'error',
    'no-nested-ternary': 'warn',
    'brace-style': 'warn',
    'no-mixed-operators': 'warn',
    'no-multi-spaces': 'warn',
    'no-extra-parens': 'off',
    'template-curly-spacing': 'warn',
    'no-trailing-spaces': 'warn',
    'no-whitespace-before-property': 'warn',
    'no-multiple-empty-lines': 'warn',
    'no-mixed-spaces-and-tabs': 'warn',
    'no-extra-semi': 'warn',
    'comma-spacing': [
      'warn',
      {
        before: false,
        after: true,
      },
    ],
    'jsx-quotes': ['warn', 'prefer-double'],
    'no-tabs': 'warn',
    'no-else-return': 'warn',
    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    'no-var': 'error',
    'no-unused-vars': 'warn',
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArray: false,
        allowArrowFunction: true,
        allowAnonymousClass: true,
        allowAnonymousFunction: true,
        allowCallExpression: true, // The true value here is for backward compatibility
        allowLiteral: false,
        allowObject: true,
      },
    ],
  },
};
