# eslint-plugin-json-spellchecker

detect and fix typo in json file

## how to use

import `@eslint/json` as json language and spellchecker plugin.

```
const { default: spellchecker } = require('eslint-plugin-json-spellchecker');
const { default: json } = require('@eslint/json');

module.exports = [
    {
        plugins: {
            json,
            'spellchecker': spellchecker,
        }
    }, {
        files: ['**/*.json'],
        language: 'json/json',
        rules: {
            'spellchecker/suggest-spelling': 'warn'
        }
    }
]
```

run eslint.

[sample](./sample.json) output is here.

```
$ npx eslint

/sample.json
  14:5  warning  Your string contains a spelling error  spellchecker/suggest-spelling
  15:5  warning  Your string contains a spelling error  spellchecker/suggest-spelling
  16:5  warning  Your string contains a spelling error  spellchecker/suggest-spelling
  17:5  warning  Your string contains a spelling error  spellchecker/suggest-spelling
  18:5  warning  Your string contains a spelling error  spellchecker/suggest-spelling
  19:5  warning  Your string contains a spelling error  spellchecker/suggest-spelling
  20:5  warning  Your string contains a spelling error  spellchecker/suggest-spelling
  21:5  warning  Your string contains a spelling error  spellchecker/suggest-spelling
  22:5  warning  Your string contains a spelling error  spellchecker/suggest-spelling
  23:5  warning  Your string contains a spelling error  spellchecker/suggest-spelling
  24:5  warning  Your string contains a spelling error  spellchecker/suggest-spelling
  24:5  warning  Your string contains a spelling error  spellchecker/suggest-spelling
  25:5  warning  Your string contains a spelling error  spellchecker/suggest-spelling

✖ 13 problems (0 errors, 13 warnings)
  0 errors and 13 warnings potentially fixable with the `--fix` option.