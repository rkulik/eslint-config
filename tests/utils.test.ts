import { describe, expect, test } from '@jest/globals';

import { combineConfigs } from '../src/utils';

const CONFIGS = [{ name: 'foo' }, { name: 'bar' }, { name: 'baz' }];

describe('utils', () => {
  describe('combineConfigs', () => {
    test('should return a single config', () => {
      expect(combineConfigs(CONFIGS[0])).toEqual([CONFIGS[0]]);
    });

    test('should combine configs', () => {
      expect(combineConfigs(CONFIGS[0], CONFIGS[1])).toEqual([CONFIGS[0], CONFIGS[1]]);
    });

    test('should flatten configs', () => {
      expect(combineConfigs([CONFIGS[0], CONFIGS[1]], CONFIGS[2])).toEqual([CONFIGS[0], CONFIGS[1], CONFIGS[2]]);
    });
  });
});
