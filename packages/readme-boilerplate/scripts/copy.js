#!/usr/bin/env node
const { exec } = require('child_process')

exec('cp files/DEFAULT_README.md README.md', (err, stdout, stderr) => {
  if (err) {
    console.error(
      'Heartly Readme Boilerplate error when copying DEFAULT_README.md. See error below...'
    )
    console.error(err.stack)
    console.error(stdout.toString())
    console.error(stderr.toString())
    console.error(
      'Please let the Heartly crew know at https://github.com/heartly/heartly. Heartly Readme Boilerplate exiting...💕'
    )
    process.exit(1)
  }
})
