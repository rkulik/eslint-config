# @rkulik/eslint-config

René's ESLint configuration.

## Usage

### Install

```bash
pnpm add -D eslint @rkulik/eslint-config
```

### Configure

Once installed, create an `eslint.config.js` in your project root:

```js
import rkulik from '@rkulik/eslint-config';

// eslint-disable-next-line import/no-default-export
export default rkulik();
```

### Run

Add a script to your `package.json` that runs ESLint:

```json
{
  "scripts": {
    "lint": "eslint . -c eslint.config.js"
  }
}
```

## Customization

### Toggle default configurations

By default, `rkulik` includes or excludes multiple configurations based on locally installed packages. However, you can configure which configurations should be included or excluded as needed:

```js
// eslint.config.js
import rkulik from '@rkulik/eslint-config';

export default rkulik({ imports: false });
```

### Add configuration overrides

As a second parameter, `rkulik` accepts custom configuration overrides, allowing you to modify or extend the default settings:

```js
// eslint.config.js
import rkulik from '@rkulik/eslint-config';

// eslint-disable-next-line import/no-default-export
export default rkulik({}, { ignores: ['**/some-directory'] });
```

### Create custom configurations

This package also exports all available configurations and utilities. These exports allow you to create your own customized configurations:

```js
// eslint.config.js
import { utils, configs } from './dist/index.js';

// eslint-disable-next-line import/no-default-export
export default utils.combineConfigs(
  configs.destructuring,
  configs.ignores,
  configs.imports,
  configs.javascript,
  configs.preferArrow,
  configs.prettier,
  configs.react,
  configs.tailwindcss,
  configs.typescript,
);
```

## License

Distributed under the [MIT License](https://github.com/rkulik/eslint-config/blob/main/LICENSE), Copyright © 2024-PRESENT [René Kulik](https://www.kulik.io/)
