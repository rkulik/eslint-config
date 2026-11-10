import { describe, expect, jest, test } from '@jest/globals';
import { ESLint, Linter } from 'eslint';
import type { isPackageExists } from 'local-pkg';

const mockedIsPackageExists = jest.fn<typeof isPackageExists>();

jest.unstable_mockModule('local-pkg', () => {
  return {
    isPackageExists: mockedIsPackageExists,
  };
});

const { rkulik } = await import('../src');

const lint = (code: string): string[] => {
  mockedIsPackageExists.mockReturnValue(false);
  const linter = new Linter({ configType: 'flat' });
  const messages = linter.verify(code, rkulik() as Linter.Config[], 'file.js');

  return messages.map((message) => {
    return message.ruleId ?? '';
  });
};

const calculateRules = async (filePath: string): Promise<Partial<Linter.RulesRecord>> => {
  mockedIsPackageExists.mockReturnValue(true);
  const eslint = new ESLint({ overrideConfigFile: true, overrideConfig: rkulik() as Linter.Config[] });
  const config = (await eslint.calculateConfigForFile(filePath)) as Linter.Config;

  return Object.fromEntries(
    Object.entries(config.rules ?? {}).filter((entry) => {
      const [, ruleConfig] = entry;
      const severity = Array.isArray(ruleConfig) ? ruleConfig[0] : ruleConfig;

      return severity !== 0 && severity !== 'off';
    }),
  );
};

describe('rules', () => {
  describe('effective rules', () => {
    test('should match the snapshot for typescript files', async () => {
      expect(await calculateRules('file.ts')).toMatchSnapshot();
    });

    test('should match the snapshot for javascript files', async () => {
      expect(await calculateRules('file.js')).toMatchSnapshot();
    });
  });

  describe('destructuring in params', () => {
    test('should report destructured parameters', () => {
      expect(lint('const greet = ({ name }) => {\n  return name;\n};\n\ngreet({});\n')).toContain(
        'destructuring/in-params',
      );
    });

    test('should not report destructuring inside the function body', () => {
      expect(
        lint('const greet = (person) => {\n  const { name } = person;\n\n  return name;\n};\n\ngreet({});\n'),
      ).not.toContain('destructuring/in-params');
    });
  });

  describe('padding before return', () => {
    test('should report a missing blank line before return', () => {
      expect(
        lint('const double = (value) => {\n  const result = value * 2;\n  return result;\n};\n\ndouble(1);\n'),
      ).toContain('@stylistic/padding-line-between-statements');
    });

    test('should not report a return that is the only statement in its block', () => {
      expect(lint('const double = (value) => {\n  return value * 2;\n};\n\ndouble(1);\n')).not.toContain(
        '@stylistic/padding-line-between-statements',
      );
    });
  });
});
