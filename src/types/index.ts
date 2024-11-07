import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

export type Config = FlatConfig.Config;

export interface OptionsConfig {
  destructuring?: boolean;
  imports?: boolean;
  javascript?: boolean;
  preferArrow?: boolean;
  prettier?: boolean;
  typescript?: boolean;
}
