#!/usr/bin/env node
const { resolve } = require('path')
const { copyFile } = require('fs')

const config = resolve(__dirname, '../config/.template-eslintrc')
const root = resolve('.eslintrc')
// only log if error
copyFile(config, root, (err) => err && console.log(`There was an error copying data, ${err}, ${config}, ${__dirname}`))
