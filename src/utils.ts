import type { Config } from './types';

export const combineConfigs = (...configs: (Config | Config[])[]): Config[] => {
  return configs.flat().filter((config) => {
    return !!Object.keys(config).length;
  });
};
