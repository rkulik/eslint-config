import { pluginTailwindCss } from '../plugins';
import type { Config } from '../types';

export const tailwindcss: Config[] = [
  {
    plugins: {
      tailwindcss: pluginTailwindCss,
    },
    rules: {
      ...pluginTailwindCss.configs.recommended.rules,
    },
  },
];
