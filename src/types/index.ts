import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

export type Config = FlatConfig.Config;

export interface OptionsConfig {
  destructuring?: boolean;
  ignores?: boolean;
  imports?: boolean;
  javascript?: boolean;
  preferArrow?: boolean;
  prettier?: boolean;
  react?: boolean;
  tailwindcss?: boolean;
  typescript?: boolean;
}
