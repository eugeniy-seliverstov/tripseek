import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import importPlugin from 'eslint-plugin-import'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from './prettier.config.js'

export default tseslint.config(
  {
    ignores: ['dist', 'vite.config.ts', 'tailwind.config.ts']
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.app.json',
      },
      globals: globals.browser,
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
      prettier,
    },
    rules: {
      // Typescript
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/ban-ts-comment': 'error',
      '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: false }],
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: true }],
      '@typescript-eslint/require-await': 'error',
      '@typescript-eslint/return-await': 'error',
      '@typescript-eslint/consistent-type-assertions': 'error',
      '@typescript-eslint/no-misused-promises': 'error',

      // React
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Import
      'import/no-default-export': ['error'],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'type'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: false,
          },
        },
      ],

      // Other
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-else-return': 'error',
      'no-unneeded-ternary': 'error',
      'prefer-const': 'error',
      'prettier/prettier': ['error', prettierConfig],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended
    ],
  },
)
