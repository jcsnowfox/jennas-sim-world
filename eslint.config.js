export default [
  {
    files: [
      'scripts/**/*.mjs',
      'eslint.config.js',
      'apps/**/*.ts',
      'packages/**/*.ts',
      'tests/**/*.ts',
    ],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: {
        Buffer: 'readonly',
        clearInterval: 'readonly',
        clearTimeout: 'readonly',
        console: 'readonly',
        document: 'readonly',
        Electron: 'readonly',
        fetch: 'readonly',
        NodeJS: 'readonly',
        process: 'readonly',
        Response: 'readonly',
        setInterval: 'readonly',
        setTimeout: 'readonly',
        URL: 'readonly',
        window: 'readonly',
      },
    },
    rules: {
      'no-undef': 'off',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    },
  },
];
