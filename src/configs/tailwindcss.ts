import { pluginTailwindCSS } from '../plugins';
import type { Config } from '../types';

export const tailwindcss: Config[] = [
  {
    plugins: {
      tailwindcss: pluginTailwindCSS,
    },
    rules: {
      ...pluginTailwindCSS.configs.recommended.rules,
    },
  },
];
