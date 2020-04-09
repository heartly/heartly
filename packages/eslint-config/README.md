# @heartly/eslint-config 💕

Standard [Eslint Config](https://eslint.org/docs/developer-guide/shareable-configs) with [Prettier](https://prettier.io/) for JavaScript Projects.

## Install

```bash

yarn add @heartly/eslint-config -D
# or
npm install @heartly/eslint-config -D

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
module.exports = require("./packages/eslint-config/dist/prettier");
```

Fin 👨‍🎨

---

Heartly is inspired by wanting a more friendly coding environment.
It is initially built by [Jeff Wainwright](https://github.com/yowainwright). 💕
