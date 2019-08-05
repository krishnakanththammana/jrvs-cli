#!/usr/bin/env node

const pckg = require('./package.json')
const program = require('commander')
const moment = require('moment')
const task = require('./modules/tasks')

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

program
  .command('task [tsk]')
  .option('-a, --add', 'add a task')
  .option('-d, --delete', 'delete a task')
  .option('-l, --list', 'rename a task')
  .description('add, list or delete task(s)')
  .action((tsk, option) => {
    if(option.add) task.addTask(tsk)
    if(option.list) task.listTask()
    if(option.delete) task.deleteTask(tsk)
  })

program.parse(process.argv)
