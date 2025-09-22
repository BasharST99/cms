// eslint.config.mjs
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default [
  // Files/dirs to ignore
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'dist/**', 'coverage/**'],
  },

  // Base JS recommendations
  js.configs.recommended,

  // Reuse Next.js’ config (Core Web Vitals)
  ...compat.extends('next/core-web-vitals'),

  // Project-specific tweaks
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      // Typescript already validates identifiers, so disable the base rule
      'no-undef': 'off',
      'no-unused-vars': 'off',
    },
  },
  {
    rules: {
      'import/no-anonymous-default-export': 'off',
    },
  },
];
