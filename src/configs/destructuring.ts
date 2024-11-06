import { destructuringPlugin } from '../plugins';
import type { Config } from '../types';

export const destructuringConfigs: Config[] = [
  {
    plugins: {
      destructuring: destructuringPlugin,
    },
    rules: {
      'destructuring/in-methods-params': 'error',
      'destructuring/in-params': [
        'error',
        {
          'max-params': 0,
        },
      ],
    },
  },
];
