import { eslintTailwindCssPlugin } from '../plugins';
import type { Config } from '../types';

export const tailwindcss: Config[] = [
  {
    plugins: {
      tailwindcss: eslintTailwindCssPlugin,
    },
    rules: {
      ...eslintTailwindCssPlugin.configs.recommended.rules,
    },
  },
];
