import { pluginDestructuring } from '../plugins';
import type { Config } from '../types';

export const destructuringConfigs: Config[] = [
  {
    plugins: {
      destructuring: pluginDestructuring,
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
