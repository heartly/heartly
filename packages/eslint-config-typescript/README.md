# @heartly/eslint-config-typescript 💕

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
module.exports = require("./packages/eslint-config-typescript/dist/prettier");
```

Fin 👨‍🎨

---

Heartly is inspired by wanting a more friendly coding environment.
It is initially built by [Jeff Wainwright](https://github.com/yowainwright). 💕
