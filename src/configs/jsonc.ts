import jsoncEslintParser from 'jsonc-eslint-parser';

import { pluginJsonc } from '../plugins';
import type { Config } from '../types';

export const jsonc: Config[] = [
  {
    plugins: {
      jsonc: pluginJsonc,
    },
    languageOptions: {
      parser: jsoncEslintParser,
    },
    files: ['*.json', '**/*.json', '*.json5', '**/*.json5', '*.jsonc', '**/*.jsonc'],
    rules: {
      ...pluginJsonc.configs['flat/recommended-with-jsonc'][1].rules,
      ...pluginJsonc.configs['flat/recommended-with-jsonc'][2].rules,
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
