import { eslintReactHooksPlugin, eslintReactRefreshPlugin } from '../plugins';
import type { Config } from '../types';

export const react: Config[] = [
  {
    plugins: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      'react-hooks': eslintReactHooksPlugin,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      'react-refresh': eslintReactRefreshPlugin,
    },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    rules: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      ...eslintReactHooksPlugin.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
        },
      ],
    },
  },
];
