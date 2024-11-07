import { pluginPreferArrow } from '../plugins';
import type { Config } from '../types';

export const preferArrowConfigs: Config[] = [
  {
    plugins: {
      'prefer-arrow': pluginPreferArrow,
    },
    rules: {
      'prefer-arrow/prefer-arrow-functions': 'error',
    },
  },
];
