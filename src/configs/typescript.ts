import eslintTypescriptParser from '@typescript-eslint/parser';

import { eslintTypescriptPlugin } from '../plugins';
import type { Config } from '../types';

import process from 'node:process';

export const typescript: Config[] = [
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
    languageOptions: {
      parser: eslintTypescriptParser,
      parserOptions: {
        projectService: {
          allowDefaultProject: ['./*.js'],
          defaultProject: './tsconfig.json',
        },
        sourceType: 'module',
        tsconfigRootDir: process.cwd(),
      },
    },
    plugins: {
      '@typescript-eslint': eslintTypescriptPlugin,
    },
    rules: {
      ...eslintTypescriptPlugin.configs['eslint-recommended'].overrides![0].rules,
      ...eslintTypescriptPlugin.configs['recommended-type-checked'].rules,
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-member-accessibility': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },
];
