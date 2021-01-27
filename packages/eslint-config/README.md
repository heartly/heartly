# @heartly/eslint-config 💕

![Typed with TypeScript](https://flat.badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=blue&color=555555)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

Standard [Eslint Config](https://eslint.org/docs/developer-guide/shareable-configs) with [Prettier](https://prettier.io/) for JavaScript Projects.

## Install

```bash
yarn add @heartly/eslint-config -D
```

## Setup

Make a `.eslintrc` file with the following.

```json
{
  "extends": "@heartly/eslint-config"
}
```

Make a `prettier.config.js` file with the following.

```js
module.exports = require('@heartly/eslint-config/dist/prettier')
```

Or, add a line to your `package.json`

```json
"prettier": "@heartly/eslint-config/dist/prettier"
```

## Debugging setup

When initially running a `eslint` script, an error requesting a `dependent` module be installed may appear.

This usually has to do with:
-  `eslint` or `prettier` packages referenced incorrectly in the `package-lock.json` or `yarn.lock`. Run `rm -rf yarn.lock package-lock.json` and `npm i` or `yarn`.
-  The `eslint` script needing to be updated or more files needing to be added to the `.eslintignore`.

Fin 👨‍🎨

---

[Heartly](https://github.com/heartly/heartly) is inspired by wanting friendly coding. 💕
