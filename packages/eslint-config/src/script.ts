#!/usr/bin/env node
const { resolve } = require('path')
const {
  constants: { COPYFILE_FICLONE_FORCE },
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
writeFile(pkgJSON, JSON.stringify(json), COPYFILE_FICLONE_FORCE, (err) => errors.push(err))

/**
 * @note copy the eslint config over
 */
copyFile(config, eslintRoot, COPYFILE_FICLONE_FORCE, (err) => errors.push(err))

if (errors.length === 0) {
  console.log('Have a great day! 👋 💕')
} else {
  console.log('There was an error configuring heartly eslint! 💔', { config, eslintRoot, json })
}
