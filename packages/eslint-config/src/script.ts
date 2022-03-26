#!/usr/bin/env node
const { resolve } = require('path')
const {
  constants: { COPYFILE_EXCL },
  copyFile,
  writeFile,
} = require('fs')

// eslint config pathing
const config = resolve(__dirname, '../config/.template-eslintrc')
const eslintRoot = resolve('.eslintrc')

// json pathing
const pkgJSON = resolve('package.json')
const json = require(pkgJSON)
json.prettier = '@heartly/eslint-config/dist/prettier'

const errors = []

/**
 * @note update the package json with the prettier config
 */
writeFile(
  pkgJSON,
  JSON.stringify(json, null, 2),
  (err) => errors.push(err) && console.log(`There was an error updating the package.json! Skipping 👯‍♀️, ${err}`),
)

/**
 * @note copy the eslint config over
 */
copyFile(
  config,
  eslintRoot,
  COPYFILE_EXCL,
  (err) => errors.push(err) && console.log(`The eslint config exists already! Skipping 👯‍♀️, ${err}`),
)

if (errors.length === 0) {
  console.log('Have a great day! 👋 💕')
}
