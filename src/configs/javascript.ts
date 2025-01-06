import { eslintJavascriptPlugin } from '../plugins';
import type { Config } from '../types';

export const javascript: Config[] = [
  {
    rules: {
      ...eslintJavascriptPlugin.configs.recommended.rules,
      'arrow-body-style': ['error', 'always'],
      'no-console': 'warn',
      'no-else-return': 'error',
    },
  },
];
