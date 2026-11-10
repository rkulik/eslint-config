import { eslintStylisticPlugin } from '../plugins';
import type { Config } from '../types';

export const stylistic: Config[] = [
  {
    plugins: {
      '@stylistic': eslintStylisticPlugin,
    },
    rules: {
      '@stylistic/padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: 'return',
        },
      ],
    },
  },
];
