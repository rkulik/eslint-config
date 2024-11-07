import { destructuring, imports, javascript, preferArrow, prettier, typescript } from './configs';
import type { Config, OptionsConfig } from './types';
import { combineConfigs } from './utils';

export const rkulik = (options: OptionsConfig = {}, ...userConfigs: (Config | Config[])[]): Config[] => {
  const {
    destructuring: includeDestructuring = true,
    imports: includeImports = true,
    javascript: includeJavasScript = true,
    preferArrow: includePreferArrow = true,
    prettier: includePrettier = true,
    typescript: includeTypeScript = true,
  } = options;

  const configs: (Config | Config[])[] = [
    includeDestructuring ? destructuring : [],
    includeImports ? imports : [],
    includeJavasScript ? javascript : [],
    includePreferArrow ? preferArrow : [],
    includePrettier ? prettier : [],
    includeTypeScript ? typescript : [],
    ...userConfigs,
  ].filter(configItem => {
    return !Array.isArray(configItem) || !!configItem.length;
  });

  return combineConfigs(...configs);
};
