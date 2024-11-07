import { destructuring, imports, javascript, preferArrow, prettier, typescript } from './configs';
import type { Config } from './types';
import { combineConfigs } from './utils';

export const rkulik = (...userConfigs: (Config | Config[])[]): Config[] => {
  return combineConfigs(destructuring, imports, javascript, preferArrow, prettier, typescript, ...userConfigs);
};
