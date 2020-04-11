# @heartly/eslint-config-typescript 💕

[Typed with TypeScript](https://flat.badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=blue&color=555555)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

Standard [Eslint Config](https://eslint.org/docs/developer-guide/shareable-configs) with [Prettier](https://prettier.io/) for TypeScript Projects.

## Install

```bash

yarn add @heartly/eslint-config-typescript -D
# or
npm install @heartly/eslint-config-typescript -D

```

## Setup

Make a `.eslintrc` file with the following.

```json
{
  "extends": "@heartly/eslint-config-typescript"
}
```

Make a `prettier.config.js` file with the following.

```js
module.exports = require('./packages/eslint-config-typescript/dist/prettier')
```

Fin 👨‍🎨

---

Heartly](/) is inspired by wanting friendly coding. 💕
