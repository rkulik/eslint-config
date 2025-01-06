import eslintJsoncParser from 'jsonc-eslint-parser';

import { eslintJsoncPlugin } from '../plugins';
import type { Config } from '../types';

export const jsonc: Config[] = [
  {
    plugins: {
      jsonc: eslintJsoncPlugin,
    },
    languageOptions: {
      parser: eslintJsoncParser,
    },
    files: ['*.json', '**/*.json', '*.json5', '**/*.json5', '*.jsonc', '**/*.jsonc'],
    rules: {
      ...eslintJsoncPlugin.configs['flat/recommended-with-jsonc'][1].rules,
      ...eslintJsoncPlugin.configs['flat/recommended-with-jsonc'][2].rules,
      'jsonc/sort-array-values': [
        'error',
        {
          order: { type: 'asc' },
          pathPattern: '.*',
        },
      ],
      'jsonc/sort-keys': [
        'error',
        {
          order: { type: 'asc' },
          pathPattern: '^$',
        },
      ],
    },
  },
];
