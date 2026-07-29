import { eslintReactHooksPlugin, eslintReactRefreshPlugin } from '../plugins';
import type { Config } from '../types';

export const react: Config[] = [
  {
    plugins: {
      'react-hooks': eslintReactHooksPlugin,
      'react-refresh': eslintReactRefreshPlugin,
    },
    rules: {
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
