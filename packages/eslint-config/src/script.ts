const { resolve } = require('path')
const { copyFile } = require('fs')

const config = resolve(__dirname, '../config/.template-eslintrc')
const dest = resolve(__dirname, '.eslintrc')

copyFile(config, dest, (err) => {
  if (err) console.log(`There was an error copying data, ${err}, ${config}, ${__dirname}`)
})
