module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'prettier', // Must be last to override other configs
  ],
  root: true,
  env: {
    node: true,
    jest: true,
    es6: true,
  },
  ignorePatterns: [
    '.eslintrc.js',
    'dist/',
    'node_modules/',
    '*.config.js',
    '*.config.ts',
    '*.d.ts',
  ],
  rules: {
    // Prettier integration
    'prettier/prettier': 'error',

    // TypeScript specific rules
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-var-requires': 'error',

    // General ESLint rules
    'prefer-const': 'error',
    'no-var': 'error',
    'no-console': 'off',
    'no-debugger': 'error',
    'no-unused-vars': 'off', // Use TypeScript version instead
    'no-trailing-spaces': 'error',
    'eol-last': 'error',
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'quotes': ['error', 'single', { avoidEscape: true }],
    'semi': ['error', 'always'],
    'indent': ['error', 4, { SwitchCase: 1 }],
    'max-len': ['error', { code: 100, ignoreUrls: true, ignoreStrings: true }],
  },
};
