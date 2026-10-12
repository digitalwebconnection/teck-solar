import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    ignores: ['dist', 'node_modules', '*.tsbuildinfo'],
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-unused-vars': 'off',
    },
  },
];
