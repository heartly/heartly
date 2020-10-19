# @heartly/prettier-config 💕

![Typed with TypeScript](https://flat.badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=blue&color=555555)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

Standard [Prettier](https://prettier.io/) Config for Code Projects.

## Install

```bash
yarn add @heartly/prettier-config -D
```

## Setup

Make a `prettier.config.js` file with the following.

```js
module.exports = require('@heartly/eslint-config-typescript/dist/prettier')
```

Or, add `"prettier": "@currency/eslint-config/dist/prettier"` to the repository's `package.json`.

## Debugging setup

When initially running a `prettier` script, an error requesting a `dependent` module be installed may appear.

This usually has to do with:
-  `prettier` packages referenced incorrectly in the `package-lock.json` or `yarn.lock`. Run `rm -rf yarn.lock package-lock.json` and `npm i` or `yarn`.

~Fin 👨‍🎨

---

[Heartly](https://github.com/heartly/heartly) is inspired by wanting friendly coding. 💕
