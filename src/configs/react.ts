import { pluginReactHooks, pluginReactRefresh } from '../plugins';
import type { Config } from '../types';

export const react: Config[] = [
  {
    plugins: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      'react-hooks': pluginReactHooks,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      'react-refresh': pluginReactRefresh,
    },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    rules: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      ...pluginReactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
        },
      ],
    },
  },
];
