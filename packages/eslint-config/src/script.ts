#!/usr/bin/env node
const { resolve } = require('path')
const { copyFile, readFile, writeFile } = require('fs').promises

// eslint config pathing
const config = resolve(__dirname, '../config/.template-eslintrc')
const eslintRoot = resolve('.eslintrc')

// json pathing
const pkgJSON = 'package.json'
const json = require(pkgJSON)
json.prettier = '@heartly/eslint-config/dist/prettier'

const errors = []

/**
 * @note update the package json with the prettier config
 */
writeFile(pkgJSON, JSON.stringify(json), (err) => err && errors.push(errors))

/**
 * @note copy the eslint config over
 */
copyFile(config, eslintRoot, (err) => err && errors.push(errors))

if (errors.length === 0) {
  console.log('Have a great day! 👋 💕')
} else {
  console.log('There was an error configuring heartly eslint! 💔', { config, eslintRoot, json })
}
