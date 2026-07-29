import { eslintPreferArrowFunctionsPlugin } from '../plugins';
import type { Config } from '../types';

export const preferArrowFunctions: Config[] = [
  {
    plugins: {
      'prefer-arrow-functions': eslintPreferArrowFunctionsPlugin,
    },
    rules: {
      'prefer-arrow-functions/prefer-arrow-functions': 'error',
    },
  },
];
