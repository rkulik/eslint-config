import { eslintPreferArrowPlugin } from '../plugins';
import type { Config } from '../types';

export const preferArrow: Config[] = [
  {
    plugins: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      'prefer-arrow': eslintPreferArrowPlugin,
    },
    rules: {
      'prefer-arrow/prefer-arrow-functions': 'error',
    },
  },
];
