import eslintJs from '@eslint/js';

import type { Config } from '../types';

export const eslintConfigs: Config[] = [
  eslintJs.configs.recommended,
  {
    rules: {
      'arrow-body-style': ['error', 'always'],
      'no-console': 'warn',
      'no-else-return': 'error',
    },
  },
];
