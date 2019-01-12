#!/usr/bin / env node

/**
 * Heartly CLI
 * command line execution of Heartly
 */

const program = require('commander')
const selections = require('../lib/selections')

program
  .command('Heartly')
  .alias('ls')
  .description('Initialize Heartly Setup')
  .action(() => selections())

program.parse(process.argv)
