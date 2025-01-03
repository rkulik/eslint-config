import jsoncEslintParser from 'jsonc-eslint-parser';

import { pluginJSONC } from '../plugins';
import type { Config } from '../types';

export const jsonc: Config[] = [
  {
    plugins: {
      jsonc: pluginJSONC,
    },
    languageOptions: {
      parser: jsoncEslintParser,
    },
    files: ['*.json', '**/*.json', '*.json5', '**/*.json5', '*.jsonc', '**/*.jsonc'],
    rules: {
      ...pluginJSONC.configs['flat/recommended-with-jsonc'][1].rules,
      ...pluginJSONC.configs['flat/recommended-with-jsonc'][2].rules,
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
