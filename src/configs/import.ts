import { pluginImport } from '../plugins';
import type { Config } from '../types';

export const importConfigs: Config[] = [
  {
    plugins: {
      import: pluginImport,
    },
    rules: {
      'import/no-default-export': 'error',
      'import/order': [
        'error',
        {
          alphabetize: {
            caseInsensitive: true,
            order: 'asc',
          },
          groups: [
            ['external', 'internal'],
            ['parent', 'sibling', 'index'],
          ],
          'newlines-between': 'always',
        },
      ],
    },
  },
];
