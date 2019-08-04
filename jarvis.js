#!/usr/bin/env node

const pckg = require('./package.json')
const program = require('commander')
const moment = require('moment')

program.version(pckg.version)

program
  .command('time')
  .description('display time')
  .action(() => {
    const time = moment().format("h:mm:ss a")
    console.log(time);
  })

program
  .command('date')
  .description('display date')
  .action(() => {
    const date = moment().format("dddd, MMMM Do YYYY");
    console.log(date);
  })

program.parse(process.argv)
