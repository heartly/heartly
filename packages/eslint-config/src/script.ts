const { join, basename, dirname, resolve } = require('path')
const fs = require('fs')

// grab sibling to script.ts/js
const config = resolve(__dirname, '../config/.eslintrc')
const dest = `${__dirname}/.eslintrc`
console.log({
  resolve2: resolve(__dirname, '../config/.eslintrc'),
  __dirname, // returns the folder path from where the function is being invoked
  config, // uses join(__dirname, '<path-to-relevant-file-relative-to-the-script-being-invoked>'), ie config/.eslintrc
  dest,
  resolutionTest: resolve('config/.eslintrc'),
  dirNameTest: dirname('config/.eslintrc'),
  baseNameTest: basename('config/.eslintrc'),
})
fs.copyFile(config, dest, (err) => {
  if (err) {
    console.log(`There was an error copying data, ${err}, ${config}, ${__dirname}`)
  }
})
