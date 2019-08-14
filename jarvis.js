#!/usr/bin/env node

const pckg = require('./package.json')
const program = require('commander')
const moment = require('moment')
const task = require('./modules/tasks')
const selenium = require('selenium-webdriver');

require('chromedriver');


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
  .command('tick [sec]')
  .description('start timer')
  .action((sec) => {
    task.timer(sec);
  })

program
  .command('logtime [type]')
  .description('start timer')
  .action((type) => {
    task.logTime(type);
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

program
  .command('search [searchString]')
  .option('-g, --google', 'google it')
  .option('-y, --youtube', 'youtube it')
  .description('search the web')
  .action((searchString, option) => {
    const driver = new selenium.Builder().forBrowser("chrome").build();
    searchString += option.parent.args.length ? '+' + option.parent.args.join('+') : ""
    if(option.google) driver.get(`https://www.google.com/search?q=${(escape(searchString))}`);
    if(option.youtube) driver.get(`https://www.youtube.com/results?search_query=${(escape(searchString))}`);
  })

program.parse(process.argv)
