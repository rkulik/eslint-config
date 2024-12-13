import { pluginJSONC } from '../plugins';
import { Config } from '../types';

export const jsonc: Config[] = [
  ...pluginJSONC.configs['flat/recommended-with-jsonc'],
  {
    rules: {
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
