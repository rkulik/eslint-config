import typescriptEslintParser from '@typescript-eslint/parser';

import { pluginTypescriptEslint } from '../plugins';
import type { Config } from '../types';

import process from 'node:process';

export const typescript: Config[] = [
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
    languageOptions: {
      parser: typescriptEslintParser,
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
      '@typescript-eslint': pluginTypescriptEslint,
    },
    rules: {
      ...pluginTypescriptEslint.configs['eslint-recommended'].overrides![0].rules,
      ...pluginTypescriptEslint.configs['recommended-type-checked'].rules,
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-member-accessibility': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },
];
